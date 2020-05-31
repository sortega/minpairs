import React from 'react';
import { Button, Col, Layout, Row } from 'antd';
import Sound from 'react-sound';

import SessionStats from './SessionStats';
import SessionOptions from './SessionOptions';
import Pairs from './pairs';
import { MinimalPairs, Side, QuestionOutcome, Question } from './model';

import 'antd/dist/antd.css';
import './App.css';

function randomSubset<T>(array: T[], size: number) {
  return array.map(value => ({ value, score: Math.random() }))
    .sort((a, b) => a.score - b.score)
    .slice(0, size).map(pair => pair.value);
}

interface AppState {
  pairs: MinimalPairs,
  activePairs: string[],
  questionOutcomes?: QuestionOutcome[],
  currentQuestion?: Question,
  sound?: Side,
  soundQueue: Side[]
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    pairs: Pairs,
    activePairs: [],
    questionOutcomes: undefined,
    currentQuestion: undefined,
    sound: undefined,
    soundQueue: []
  };

  startTraining(options: { pairsToTrain: number, phonemePairIds: string[] }) {
    this.setState(state => {
      return {
        ...state,
        activePairs: randomSubset(options.phonemePairIds, options.pairsToTrain),
        questionOutcomes: []
      };
    });
    this.nextQuestion();
  }

  nextQuestion() {
    const correctAnswer = (Math.random() < 0.5) ? Side.Left : Side.Right;
    this.setState(state => {
      const { activePairs } = state;
      const pairId = activePairs[Math.floor(Math.random() * activePairs.length)]
      return {
        currentQuestion: {
          pairId,
          correctAnswer,
          actualAnswer: undefined,
        },
        sound: undefined,
        soundQueue: []
      }
    });
    this.play(correctAnswer);
  }

  doAnswer(actualAnswer: Side) {
    this.setState(state => {
      if (!state.currentQuestion) {
        return state; // This guard should not be needed
      }
      const currentQuestion: QuestionOutcome = { ...state.currentQuestion, actualAnswer };
      const questionOutcomes = state.questionOutcomes
        ? [...state.questionOutcomes, currentQuestion]
        : [currentQuestion];
      // We should not guard on state.currentQuestion
      const doneWithPair = state.currentQuestion && this.areWeDoneWithPair(state.currentQuestion.pairId, questionOutcomes);
      return {
        ...state,
        activePairs: doneWithPair ? state.activePairs.filter(pairId => !state.currentQuestion || pairId !== state.currentQuestion.pairId) : state.activePairs,
        currentQuestion,
        sound: undefined,
        questionOutcomes
      };
    })
    this.play(actualAnswer);
    this.play(actualAnswer === Side.Right ? Side.Left : Side.Right);
  }

  areWeDoneWithPair(pairId: string, questionOutcomes: QuestionOutcome[]) {
    const outcomes = questionOutcomes
      .filter(outcome => outcome.pairId === pairId)
      .map(outcome => ({
        right: outcome.correctAnswer === outcome.actualAnswer,
        side: outcome.correctAnswer
      }));
    let streakSize = 0;
    let lastRightSide = null;
    for (let i = 0; i < outcomes.length; i++) {
      if (outcomes[i].right) {
        if (outcomes[i].side !== lastRightSide) {
          streakSize += 1;
          lastRightSide = outcomes[i].side;
        }
      } else {
        streakSize = 0;
        lastRightSide = null;
      }
    }
    return streakSize >= 2;
  }

  playNextSound = (state: AppState) => {
    if (state.sound || state.soundQueue.length === 0) {
      return state;
    }
    const side = state.soundQueue[0];
    return { ...state, sound: side, soundQueue: state.soundQueue.slice(1) };
  }

  onFinishSound() {
    this.setState(state => {
      return this.playNextSound({ ...state, sound: undefined });
    });
  }

  play(side: Side) {
    this.setState(state => {
      return this.playNextSound({ ...state, soundQueue: [...state.soundQueue, side] });
    })
  }

  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="App">
        <Layout>
          <Header><h1><img id="logo" src="/minpairs.png" alt="Minpairs logo" />Minimal Pairs Trainer</h1></Header>
          <Content className="site-layout">
            {
              this.state.activePairs.length > 0 ?
                this.renderQuestion() :
                (this.state.questionOutcomes ?
                  this.renderStats(this.state.questionOutcomes) :
                  this.renderSelectTraining())
            }
          </Content>
          <Footer style={{ textAlign: 'center' }}>Work in progres by <a href="https://twitter.com/_sortega">sortega</a></Footer>
        </Layout>
      </div>
    );
  }

  renderSelectTraining() {
    return (<SessionOptions
      pairs={this.state.pairs}
      onComplete={this.startTraining.bind(this)}
    />);
  }

  renderQuestion() {
    const { sound, pairs, currentQuestion } = this.state;
    if (!currentQuestion) {
      return <></>;
    }
    const { pairId, correctAnswer, actualAnswer } = currentQuestion;
    const pair = pairs[pairId];

    return (<div className="question-card">
      {this.renderSound()}
      <p>Active pairs: {this.state.activePairs.length}</p>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Button className="answer"
            type={actualAnswer && (correctAnswer === Side.Left) ? "primary" : "default"}
            onClick={(actualAnswer ? this.play : this.doAnswer).bind(this, Side.Left)}
            loading={!!(actualAnswer && sound === Side.Left)}
            danger={actualAnswer === Side.Left && actualAnswer !== correctAnswer}>
            {pair.left.label} /{pair.left.phoneme}/
          </Button>
        </Col>
        <Col span={12}>
          <Button className="answer"
            type={actualAnswer && (correctAnswer === Side.Right) ? "primary" : "default"}
            onClick={(actualAnswer ? this.play : this.doAnswer).bind(this, Side.Right)}
            loading={!!(actualAnswer && sound === Side.Right)}
            danger={actualAnswer === Side.Right && actualAnswer !== correctAnswer}>
            {pair.right.label} /{pair.right.phoneme}/
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {
            actualAnswer
              ? <Button
                className="action"
                onClick={this.nextQuestion.bind(this)}>
                Next
                </Button>
              : <Button
                className="action"
                onClick={this.play.bind(this, correctAnswer)}
                loading={!!sound}>
                Replay
              </Button>
          }
        </Col>
      </Row>
    </div>);
  }

  renderSound() {
    const { sound, pairs, currentQuestion } = this.state;
    if (!currentQuestion) {
      return <></>;
    }
    const pairId = currentQuestion.pairId;
    const soundId = sound ? pairs[pairId][sound].id : null;
    const soundUrl = `/sounds/${soundId}.mp3`;
    return (<Sound
      url={soundUrl}
      playStatus={soundId ? 'PLAYING' : 'STOPPED'}
      onFinishedPlaying={this.onFinishSound.bind(this)}
    />);
  }

  renderStats(questionOutcomes: QuestionOutcome[]) {
    return (<SessionStats
      pairs={this.state.pairs}
      outcomes={questionOutcomes}
      onDismiss={() => this.setState({ questionOutcomes: undefined })} />);
  }
}

export default App;
