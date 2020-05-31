import React from 'react';
import { Button, Col, InputNumber, Row, Checkbox } from 'antd';
import { MinimalPairs } from './model';

interface SessionOptionsProps {
    pairs: MinimalPairs,
    onComplete: (opts: { pairsToTrain: number, phonemePairIds: string[] }) => void,
}

interface SessionOptionsState {
    pairsToTrain: number,
    selectedPhonemes: string[],
}

class SessionOptions extends React.Component<SessionOptionsProps, SessionOptionsState> {
    state = {
        pairsToTrain: Object.keys(this.props.pairs).length,
        selectedPhonemes: this.uniquePhonemes().map(pair => pair.phoneme),
    }

    onComplete() {
        const { pairsToTrain, selectedPhonemes } = this.state;
        const phonemePairIds = this.filterPairIdsBySelectedPhonemes(selectedPhonemes);
        this.props.onComplete({ pairsToTrain, phonemePairIds });
    }

    filterPairIdsBySelectedPhonemes(selectedPhonemes: string[]): string[] {
        return Object.entries(this.props.pairs)
            .filter(entry => {
                const pair = entry[1];
                return selectedPhonemes.includes(pair.left.phoneme) &&
                    selectedPhonemes.includes(pair.right.phoneme);
            })
            .map(entry => entry[0]);
    }

    uniquePhonemes(): Array<{ phoneme: string, count: number }> {
        const deduped: { [key: string]: { phoneme: string, count: number } } = {};
        Object.values(this.props.pairs).forEach(pair => {
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
        const maxPairs = this.filterPairIdsBySelectedPhonemes(this.state.selectedPhonemes).length;

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
                        onChange={value => this.setState({ pairsToTrain: value || maxPairs })}
                    />
                    &nbsp;
                    / {maxPairs}
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col offset={1} span={22}>
                    <Checkbox.Group
                        options={options}
                        value={this.state.selectedPhonemes}
                        onChange={checkboxValues => 
                            this.setState({ 
                                selectedPhonemes: checkboxValues.flatMap(value => typeof value === "string" ? [value] : []) 
                            })
                        }
                    />
                </Col>
            </Row>

            <Button
                type="primary"
                onClick={this.onComplete.bind(this)}
                disabled={this.state.selectedPhonemes.length === 0}>
                Start training
            </Button>
        </>;
    }
}

export default SessionOptions;
