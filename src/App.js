import React from 'react';
import './App.css';
import { message, Layout, Row, Col, Button } from 'antd';
import Sound from 'react-sound';
import 'antd/dist/antd.css';
import Pairs from './pairs';

class App extends React.Component {
  state = {
    pairs: Pairs,
    activePairs: [],
    questionOutcomes: [],
    currentQuestion: null,
    sound: null,
    soundQueue: []
  };

  startTraining() {
    // TODO: reset stats
    this.setState(state => {
      return {
        ...state,
        activePairs: Object.keys(state.pairs),
        questionOutcomes: []
      };
    });
    this.nextQuestion();
  }

  nextQuestion() {
    const correctAnswer = (Math.random() < 0.5) ? "left" : "right";
    this.setState(state => {
      const { activePairs } = state;
      const pairId = activePairs[Math.floor(Math.random() * activePairs.length)]
      return {
        currentQuestion: {
          pairId,
          correctAnswer,
          actualAnswer: null,
        },
        sound: null,
        soundQueue: []
      }
    });
    this.play(correctAnswer);
  }

  doAnswer(actualAnswer) {
    this.setState(state => {
      const currentQuestion = { ...state.currentQuestion, actualAnswer };
      const questionOutcomes = [...state.questionOutcomes, currentQuestion];
      const doneWithPair = this.areWeDoneWithPair(state.currentQuestion.pairId, questionOutcomes);
      return {
        ...state,
        activePairs: doneWithPair ? state.activePairs.filter(pairId => pairId !== state.currentQuestion.pairId) : state.activePairs,
        currentQuestion,
        sound: null,
        questionOutcomes
      };
    })
    this.play(actualAnswer);
    this.play(actualAnswer === "right" ? "left" : "right");
  }

  areWeDoneWithPair(pairId, questionOutcomes) {
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
    console.log("outcomes: ", outcomes);
    console.log("streal size: ", streakSize);
    return streakSize >= 2;
  }

  playNextSound = state => {
    if (state.sound || state.soundQueue.length === 0) {
      return state;
    }
    const side = state.soundQueue[0];
    return { ...state, sound: side, soundQueue: state.soundQueue.slice(1) };
  }

  onFinishSound() {
    this.setState(state => {
      return this.playNextSound({ ...state, sound: null });
    });
  }

  play(side) {
    this.setState(state => {
      return this.playNextSound({ ...state, soundQueue: [...state.soundQueue, side] });
    })
  }

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    this.setState({ date });
  };

  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <Header><h1>Minimal Pairs Trainer</h1></Header>
          <Content className="site-layout">
            {this.state.activePairs.length > 0 ? this.renderQuestion() : this.renderStartButton()}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Work in progres by sortega</Footer>
        </Layout>
      </div>
    );
  }

  renderStartButton() {
    return (<Button type="primary" onClick={this.startTraining.bind(this)}>
      Start training
    </Button>);
  }

  renderQuestion() {
    const { sound, pairs, currentQuestion } = this.state;
    const { pairId, correctAnswer, actualAnswer } = currentQuestion;
    const pair = pairs[pairId];

    console.log("outcomes:", this.state.questionOutcomes)
    console.log("active:", this.state.activePairs)

    return (<div className="question-card">
      {this.renderSound()}
      Active pairs: {this.state.activePairs.length}
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Button className="answer"
            type={actualAnswer && (correctAnswer === "left") ? "primary" : "default"}
            onClick={(actualAnswer ? this.play : this.doAnswer).bind(this, "left")}
            loading={!!(actualAnswer && sound === "left")}
            danger={actualAnswer === "left" && actualAnswer !== correctAnswer}>
            {pair.left.label}
          </Button>
        </Col>
        <Col span={12}>
          <Button className="answer"
            type={actualAnswer && (correctAnswer === "right") ? "primary" : "default"}
            onClick={(actualAnswer ? this.play : this.doAnswer).bind(this, "right")}
            loading={!!(actualAnswer && sound === "right")}
            danger={actualAnswer === "right" && actualAnswer !== correctAnswer}>
            {pair.right.label}
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
                onClick={this.play.bind(this, [correctAnswer])}
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
    const pairId = currentQuestion.pairId;
    const soundId = sound ? pairs[pairId][sound].id : null;
    const soundUrl = `/sounds/${soundId}.mp3`;
    return (<Sound
      url={soundUrl}
      playStatus={soundId ? Sound.status.PLAYING : Sound.status.STOPPED}
      onFinishedPlaying={this.onFinishSound.bind(this)}
    />);
  }
}

export default App;
