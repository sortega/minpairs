import React from 'react';
import './App.css';
import { message, Layout, Row, Col, Button } from 'antd';
import Sound from 'react-sound';
import 'antd/dist/antd.css';
import Pairs from './pairs';

class App extends React.Component {
  state = {
    pairs: Pairs,
    currentQuestion: null,
    sound: null,
    soundQueue: []
  };

  startTraining() {
    // TODO: reset stats
    this.nextQuestion()
  }

  nextQuestion() {
    const pairs = this.state.pairs;
    const pairIds = Object.keys(pairs);
    const pairId = pairIds[Math.floor(Math.random() * pairIds.length)]
    const correctAnswer = (Math.random() < 0.5) ? "left" : "right";
    this.setState({
      currentQuestion: {
        pairId,
        correctAnswer,
        actualAnswer: null,
      },
      sound: null,
      soundQueue: []
    })
    this.play(correctAnswer);
  }

  doAnswer(actualAnswer) {
    this.setState({
      currentQuestion: { ...this.state.currentQuestion, actualAnswer },
      sound: null
    })
    this.play("left");
    this.play("right");
  }

  playNextSound = state => {
    if (state.sound || state.soundQueue.length == 0) {
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
        <Layout>
          <Header><h1>Minimal Pairs Trainer</h1></Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, textAlign: "center" }}>
            {this.state.currentQuestion ? this.renderQuestion() : this.renderStartButton()}
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

    console.log("actualAnswer", actualAnswer, "sound", sound, "loadings", !!(actualAnswer && sound === "left"), !!(actualAnswer && sound === "right"))

    return (<div className="question-card">
      {this.renderSound()}
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
              ? <Button className="action" onClick={this.nextQuestion.bind(this)}>Next</Button>
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
