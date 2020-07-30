import React from 'react';
import { Layout } from 'antd';

import SessionStats from './SessionStats';
import SessionOptions from './SessionOptions';
import Pairs from './pairs';
import { QuestionOutcome } from './model';
import QuizSession from './QuizSession';

import 'antd/dist/antd.css';
import './App.css';

function randomSubset<T>(array: T[], size: number) {
  return array.map(value => ({ value, score: Math.random() }))
    .sort((a, b) => a.score - b.score)
    .slice(0, size)
    .map(pair => pair.value);
}

enum Stage {
  Configuring,
  Quizzing,
  Debriefing
}

type ConfiguringState = {
  stage: Stage.Configuring
}

type QuizzingState = {
  stage: Stage.Quizzing,
  pairsToQuiz: string[]
}

type DebriefingState = {
  stage: Stage.Debriefing,
  questionOutcomes: QuestionOutcome[],
}

type AppState = ConfiguringState | QuizzingState | DebriefingState;

class App extends React.Component<{}, AppState> {
  state: AppState = {
    stage: Stage.Configuring
  };

  startQuizzing(options: { pairsToTrain: number, phonemePairIds: string[] }) {
    this.setState({
      stage: Stage.Quizzing,
      pairsToQuiz: randomSubset(options.phonemePairIds, options.pairsToTrain),
    });
  }

  finishQuizzing(questionOutcomes: QuestionOutcome[]) {
    this.setState({
      stage: Stage.Debriefing,
      questionOutcomes
    });
  }

  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="App">
        <Layout>
          <Header><h1><img id="logo" src="/minpairs.png" alt="Minpairs logo" />Minimal Pairs Trainer</h1></Header>
          <Content className="site-layout">
            {
              (this.state.stage === Stage.Quizzing) ?
                <QuizSession pairsToQuiz={this.state.pairsToQuiz}
                  onSessionComplete={outcomes => this.finishQuizzing(outcomes)} /> :
                ((this.state.stage === Stage.Debriefing) ?
                  this.renderStats(this.state.questionOutcomes) :
                  <SessionOptions onComplete={this.startQuizzing.bind(this)}
                  />)
            }
          </Content>
          <Footer style={{ textAlign: 'center' }}>Work in progres by <a href="https://twitter.com/_sortega">sortega</a></Footer>
        </Layout>
      </div>
    );
  }

  renderStats(questionOutcomes: QuestionOutcome[]) {
    return (<SessionStats
      pairs={Pairs}
      outcomes={questionOutcomes}
      onDismiss={() => this.setState({ stage: Stage.Configuring })} />);
  }
}

export default App;
