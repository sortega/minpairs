import React from 'react';
import { Button, Col, InputNumber, Row } from 'antd';
import Pairs from './pairs';
import PhonemeCheckGroup from './PhonemeCheckGroup';

interface SessionOptionsProps {
    onComplete: (opts: { pairsToTrain: number, phonemePairIds: string[] }) => void,
}

interface SessionOptionsState {
    pairsToTrain: number,
    selectedMonopthongs: string[],
    selectedDitphthongs: string[],
    selectedOtherPhonemes: string[],
}

class SessionOptions extends React.Component<SessionOptionsProps, SessionOptionsState> {
    state = {
        pairsToTrain: Object.keys(Pairs).length,
        selectedMonopthongs: [],
        selectedDitphthongs: [],
        selectedOtherPhonemes: [],
    }

    selectedPhonemes() {
        const { selectedMonopthongs, selectedDitphthongs, selectedOtherPhonemes } = this.state;
        return selectedMonopthongs.concat(selectedDitphthongs, selectedOtherPhonemes);
    }

    onComplete() {
        const { pairsToTrain } = this.state;
        const phonemePairIds = this.filterPairIdsBySelectedPhonemes(this.selectedPhonemes());
        console.log("completed with", pairsToTrain, phonemePairIds)
        this.props.onComplete({ pairsToTrain, phonemePairIds });
    }

    filterPairIdsBySelectedPhonemes(selectedPhonemes: string[]): string[] {
        return Object.entries(Pairs)
            .filter(entry => {
                const pair = entry[1];
                return selectedPhonemes.includes(pair.left.phoneme) &&
                    selectedPhonemes.includes(pair.right.phoneme);
            })
            .map(entry => entry[0]);
    }

    uniquePhonemes(): Array<{ phoneme: string, count: number }> {
        const deduped: { [key: string]: { phoneme: string, count: number } } = {};
        Object.values(Pairs).forEach(pair => {
            const left = pair.left.phoneme;
            const right = pair.right.phoneme;
            [left, right].forEach(phoneme => {
                if (deduped[phoneme]) {
                    deduped[phoneme].count += 1;
                } else {
                    deduped[phoneme] = { phoneme, count: 1 };
                }
            });
        });
        return [...Object.values(deduped)];
    }

    render() {
        const options = this.uniquePhonemes().map(entry =>
            ({
                label: `/${entry.phoneme}/`,
                value: entry.phoneme
            })
        );
        options.sort((l, r) => l.value.localeCompare(r.value));
        const maxPairs = this.filterPairIdsBySelectedPhonemes(this.selectedPhonemes()).length;
        const monopthongs = ['æ', 'ɑ', 'e', 'i:', 'ɪ', 'ɔ', 'u:', 'ʊ', 'ʌ'];
        const diphthongs = ['aɪ', 'aʊ', 'oʊ'];
        const otherPhonemes = this.uniquePhonemes()
            .map(entry => entry.phoneme)
            .filter(phoneme => monopthongs.indexOf(phoneme) < 0 && diphthongs.indexOf(phoneme) < 0)
            .sort((l, r) => l.localeCompare(r));
        
        return <>
            <Row gutter={[16, 16]} style={{ textAlign: "left" }}>
                <Col span={12} style={{ textAlign: "right", lineHeight: "32px" }}>
                    Pairs to train
                </Col>
                <Col span={12}>
                    <InputNumber
                        min={1}
                        max={maxPairs}
                        style={{ width: "4em" }}
                        value={this.state.pairsToTrain}
                        // TODO: handle undefined for this handler
                        onChange={value => this.setState({ pairsToTrain: Math.max(value || maxPairs, 1) })}
                    />
                    &nbsp;
                    / {maxPairs}
                </Col>
            </Row>

            <PhonemeCheckGroup
                name="Monopthongs"
                phonemes={monopthongs}
                initialSelection={monopthongs}
                onChange={selectedMonopthongs => { this.setState({ selectedMonopthongs }) }} />

            <PhonemeCheckGroup
                name="Diphthongs"
                phonemes={diphthongs}
                initialSelection={[]}
                onChange={selectedDitphthongs => { this.setState({ selectedDitphthongs }) }} />

            <PhonemeCheckGroup
                name="Other phonemes"
                phonemes={otherPhonemes}
                initialSelection={otherPhonemes}
                onChange={selectedOtherPhonemes => { this.setState({ selectedOtherPhonemes }) }} />

            <Button
                type="primary"
                onClick={this.onComplete.bind(this)}
                disabled={maxPairs === 0}>
                Start training
            </Button>
        </>;
    }
}

export default SessionOptions;
