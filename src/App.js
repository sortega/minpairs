import React from 'react';
import './App.css';
import { message, Layout, Row, Col, Button } from 'antd';
import Sound from 'react-sound';
import 'antd/dist/antd.css';

class App extends React.Component {
  state = {
    pairs: {
      "day-they": {
        left: {
          id: "day",
          label: "day /d/"
        },
        right: {
          id: "they",
          label: "they /ð/"
        }
      }
    },
    currentQuestion: null,
    date: null
  };

  startTraining = event => {
    // TODO: reset stats
    this.nextQuestion()
  }

  nextQuestion = event => {
    const pairId = "day-they"; // TODO: choose randomly
    const correctAnswer = (Math.random() < 0.5) ? "left" : "right";
    this.setState({ currentQuestion: {
      pairId,
      correctAnswer,
      actualAnswer: null,
      soundId: this.state.pairs[pairId][correctAnswer].id
    }})
  }

  answerLeft = event => this.answer("left")
  answerRight = event => this.answer("right")
  answer(answer) {
    this.setState({
      currentQuestion: {...this.state.currentQuestion, actualAnswer: answer, soundId: null }
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
            { this.state.currentQuestion ? this.renderQuestion() : this.renderStartButton()}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Work in progres by sortega</Footer>
        </Layout>
      </div>
    );
  }

  renderStartButton() {
    return (<Button type="primary" onClick={this.startTraining}>
      Start training
    </Button>);
  }

  renderQuestion() {
    const { pairId, correctAnswer, actualAnswer, soundId } = this.state.currentQuestion;
    const pair = this.state.pairs[pairId];
    const soundUrl = `/sounds/${soundId}.mp3`;
    console.log(soundUrl);
    return (<div className="question-card">
      <Sound url={soundUrl} playStatus={soundId ? Sound.status.PLAYING : Sound.status.STOPPED}/>
      <Row gutter={[16,16]}>
        <Col span={12}>
          <Button className="answer" 
                  type={actualAnswer && (correctAnswer === "left") ? "primary" : "default" }
                  onClick={this.answerLeft}>
            {pair.left.label}
          </Button>
        </Col>
        <Col span={12}>
          <Button className="answer"
                  type={actualAnswer && (correctAnswer === "right") ? "primary" : "default" }
                  onClick={this.answerRight}>
            {pair.right.label}
          </Button>
        </Col>
      </Row>
      <Row gutter={[16,16]}>
        <Col span={24}>
          {
            actualAnswer 
              ? <Button className="action" onClick={this.nextQuestion}>Next</Button>
              : <Button className="action" onClick={this.setState.bind(this)}>Replay</Button>
          }
        </Col>
      </Row>
    </div>);
  }
}

export default App;
