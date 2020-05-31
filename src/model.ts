export interface Phoneme {
    id: string,
    label: string,
    phoneme: string
}

export interface MinimalPair {
    left: Phoneme,
    right: Phoneme
}

export interface MinimalPairs {
    [key: string]: MinimalPair
}

export enum Side {
    Left = "left",
    Right = "right"
}

export interface Question {
    pairId: string,
    correctAnswer: Side,
    actualAnswer?: Side
}

export interface QuestionOutcome extends Question {
    actualAnswer: Side
}