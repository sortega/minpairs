import React from 'react';
import { Button, Col, Row } from 'antd';
import Sound from 'react-sound';

import Pairs from './pairs';
import { Side, QuestionOutcome, Question } from './model';

interface QuizSessionProps {
    pairsToQuiz: string[],
    onSessionComplete(questionOutcomes: QuestionOutcome[]): void
}

interface QuizSessionState {
    activePairs: string[],
    currentQuestion: Question,
    questionOutcomes: QuestionOutcome[],
    sound?: Side,
    soundQueue: Side[]
}

class QuizSession extends React.Component<QuizSessionProps, QuizSessionState> {
    constructor(props: QuizSessionProps) {
        super(props);
        const currentQuestion = this.chooseNextQuestion(this.props.pairsToQuiz);
        this.state = {
            activePairs: this.props.pairsToQuiz,
            currentQuestion,
            questionOutcomes: [],
            sound: currentQuestion.correctAnswer,
            soundQueue: []
        }
    }

    chooseNextQuestion(activePairs: string[]): Question {
        const correctAnswer = (Math.random() < 0.5) ? Side.Left : Side.Right;
        const index = Math.floor(Math.random() * activePairs.length);
        return ({
            pairId: activePairs[index],
            correctAnswer,
            actualAnswer: undefined,
        });
    }

    play(side: Side) {
        this.setState(state => {
            return { ...state, sound: side, soundQueue: []};
        })
    }

    playNextSound = (state: QuizSessionState) => {
        if (state.sound || state.soundQueue.length === 0) {
            return state;
        }
        return ({
            ...state, 
            sound: state.soundQueue[0], 
            soundQueue: state.soundQueue.slice(1) 
        });
    }

    onFinishSound() {
        this.setState(state => {
            return this.playNextSound({ ...state, sound: undefined });
        });
    }

    doAnswer(actualAnswer: Side) {
        this.setState(state => {
            const currentQuestion = { ...state.currentQuestion, actualAnswer };
            const questionOutcomes = [...state.questionOutcomes, currentQuestion];
            const doneWithPair = this.areWeDoneWithPair(state.currentQuestion.pairId, questionOutcomes);
            const activePairs = doneWithPair
                ? state.activePairs.filter(pairId => !state.currentQuestion || pairId !== state.currentQuestion.pairId)
                : state.activePairs;
            return ({
                ...state,
                activePairs,
                currentQuestion,
                sound: actualAnswer,
                soundQueue: (actualAnswer === Side.Right) ? [Side.Left] : [Side.Right],
                questionOutcomes
            });
        })
    }

    nextQuestion() {
        if (this.state.activePairs.length === 0) {
            this.props.onSessionComplete(this.state.questionOutcomes)
        } else {
            this.setState(state => {
                const { activePairs } = state;
                const currentQuestion = this.chooseNextQuestion(activePairs);
                return ({
                    ...state,
                    currentQuestion,
                    sound: currentQuestion.correctAnswer,
                    soundQueue: []
                });
            });
        }
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

    render() {
        const { sound, currentQuestion } = this.state;
        const { pairId, correctAnswer, actualAnswer } = currentQuestion;
        const pair = Pairs[pairId];

        return (<div className="question-card">
            {this.renderSound()}
            <p>Active pairs: {this.state.activePairs.length}</p>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Button className="answer"
                        type={actualAnswer && (correctAnswer === Side.Left) ? "primary" : "default"}
                        onClick={actualAnswer ? this.play.bind(this, Side.Left) : this.doAnswer.bind(this, Side.Left)}
                        loading={!!(actualAnswer && sound === Side.Left)}
                        danger={actualAnswer === Side.Left && actualAnswer !== correctAnswer}>
                        {pair.left.label} /{pair.left.phoneme}/
              </Button>
                </Col>
                <Col span={12}>
                    <Button className="answer"
                        type={actualAnswer && (correctAnswer === Side.Right) ? "primary" : "default"}
                        onClick={actualAnswer ? this.play.bind(this, Side.Right) : this.doAnswer.bind(this, Side.Right)}
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
                                {this.state.activePairs.length > 0 ? "Next" : "Finish"}
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
        const { sound, currentQuestion } = this.state;
        if (!currentQuestion) {
            return <></>;
        }
        const pairId = currentQuestion.pairId;
        const soundId = sound ? Pairs[pairId][sound].id : null;
        return (soundId 
            ? <Sound
                url={`/sounds/${soundId}.mp3`}
                playStatus={'PLAYING'}
                onFinishedPlaying={this.onFinishSound.bind(this)}/>
            : <></>);
    }
}

export default QuizSession;