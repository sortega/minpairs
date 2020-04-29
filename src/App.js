import React from 'react';
import './App.css';
import { message, Layout, Row, Col, Button } from 'antd';
import Sound from 'react-sound';
import 'antd/dist/antd.css';

class App extends React.Component {
  state = {
    pairs: {
      // "day-they": {
      //   left: {
      //     id: "day",
      //     label: "day /d/"
      //   },
      //   right: {
      //     id: "they",
      //     label: "they /ð/"
      //   }
      // },
      // /ɪ/ - /i:/
      "shit-sheet": {
        left: {
          id: "shit",
          label: "shit /ɪ/"
        },
        right: {
          id: "sheet",
          label: "sheet /i:/"
        }
      },
      "lip-leap": {
        left: {
          id: "lip",
          label: "lip /ɪ/"
        },
        right: {
          id: "leap",
          label: "leap /i:/"
        }
      },
      "rich-reach": {
        left: {
          id: "rich",
          label: "rich /ɪ/"
        },
        right: {
          id: "reach",
          label: "reach /i:/"
        }
      },
      "still-steal": {
        left: {
          id: "still",
          label: "still /ɪ/"
        },
        right: {
          id: "steal",
          label: "steal /i:/"
        }
      },
      "fist-feast": {
        left: {
          id: "fist",
          label: "fist /ɪ/"
        },
        right: {
          id: "feast",
          label: "feast /i:/"
        }
      },
      "fit-feet": {
        left: {
          id: "fit",
          label: "fit /ɪ/"
        },
        right: {
          id: "feet",
          label: "feet /i:/"
        }
      },
      "slip-sleep": {
        left: {
          id: "slip",
          label: "slip /ɪ/"
        },
        right: {
          id: "sleep",
          label: "sleep /i:/"
        }
      },
      "sin-seen": {
        left: {
          id: "sin",
          label: "sin /ɪ/"
        },
        right: {
          id: "seen",
          label: "seen /i:/"
        }
      },
      "lick-leak": {
        left: {
          id: "lick",
          label: "lick /ɪ/"
        },
        right: {
          id: "leak",
          label: "leak /i:/"
        }
      },
      "pill-peal": {
        left: {
          id: "pill",
          label: "pill /ɪ/"
        },
        right: {
          id: "peal",
          label: "peal /i:/"
        }
      },
    },
    currentQuestion: null
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
        soundId: null
      }
    })
    this.play(correctAnswer);
  }

  doAnswer(actualAnswer) {
    this.setState({
      currentQuestion: { ...this.state.currentQuestion, actualAnswer: actualAnswer, soundId: null }
    })
    this.play(actualAnswer);
  }

  play(side) {
    this.setState(state => {
      console.log(this.state)
      const pairId = state.currentQuestion.pairId;
      const soundId = side ? state.pairs[pairId][side].id : null;
      return {...state, currentQuestion: { ...state.currentQuestion, soundId }};
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
    const { pairId, correctAnswer, actualAnswer, soundId } = this.state.currentQuestion;
    console.log(this.state)
    const pair = this.state.pairs[pairId];
    const soundUrl = `/sounds/${soundId}.mp3`;
    return (<div className="question-card">
      <Sound url={soundUrl} playStatus={soundId ? Sound.status.PLAYING : Sound.status.STOPPED} />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Button className="answer"
            type={actualAnswer && (correctAnswer === "left") ? "primary" : "default"}
            onClick={(actualAnswer ? this.play : this.doAnswer).bind(this, ["left"])}>
            {pair.left.label}
          </Button>
        </Col>
        <Col span={12}>
          <Button className="answer"
            type={actualAnswer && (correctAnswer === "right") ? "primary" : "default"}
            onClick={(actualAnswer ? this.play : this.doAnswer).bind(this, ["right"])}>
            {pair.right.label}
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {
            actualAnswer
              ? <Button className="action" onClick={this.nextQuestion.bind(this)}>Next</Button>
              : <Button className="action" onClick={this.play.bind(this, [correctAnswer])}>Replay</Button>
          }
        </Col>
      </Row>
    </div>);
  }
}

export default App;
