import React from 'react';
import { Button, Col, InputNumber, Row, Checkbox } from 'antd';

class SessionOptions extends React.Component {
    state = {
        pairsToTrain: Object.keys(this.props.pairs).length,
        selectedPhonemes: this.uniquePhonemes().map(pair => pair.phoneme),
    }

    onComplete() {
        const { pairsToTrain, selectedPhonemes } = this.state;
        const phonemePairs = this.filterPairsBySelectedPhonemes(selectedPhonemes);
        this.props.onComplete({ pairsToTrain, phonemePairs });
    }

    filterPairsBySelectedPhonemes(selectedPhonemes) {
        return Object.entries(this.props.pairs)
            .filter(entry => {
                const pair = entry[1];
                return selectedPhonemes.includes(pair.left.phoneme) &&
                    selectedPhonemes.includes(pair.right.phoneme);
            })
            .map(entry => entry[0]);
    }

    uniquePhonemes() { // [{ phoneme: String, count: Int }]
        const deduped = {};
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
        const maxPairs = this.filterPairsBySelectedPhonemes(this.state.selectedPhonemes).length;

        return <>
            <Row gutter={[16, 16]} style={{ textAlign: "left" }}>
                <Col span={12} style={{ textAlign: "right", lineHeight: "32px" }}>
                    Pairs to train
            </Col>
                <Col span={12}>
                    <InputNumber
                        min={1}
                        max={maxPairs}
                        style={{width: "4em"}}
                        value={this.state.pairsToTrain}
                        onChange={value => this.setState({ pairsToTrain: value })}
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
                        onChange={selectedPhonemes => this.setState({ selectedPhonemes })}
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
