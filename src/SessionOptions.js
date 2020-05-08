import React from 'react';
import { Button, Col, InputNumber, Row, Table } from 'antd';

class SessionOptions extends React.Component {
    state = {
        pairsToTrain: Object.keys(this.props.pairs).length,
        selectedPairKeys: this.uniquePairs().map(pair => pair.key),
    }

    onComplete() {
        const { pairsToTrain, selectedPairKeys } = this.state;
        const phonemePairs = this.uniquePairs()
            .filter(pair => selectedPairKeys.includes(pair.key))
            .map(pair => ({ left: pair.left, right: pair.right }));
        this.props.onComplete({ pairsToTrain, phonemePairs });
    }

    uniquePairs() {
        const deduped = {};
        Object.values(this.props.pairs).forEach(pair => {
            const left = pair.left.phoneme;
            const right = pair.right.phoneme;
            const key = `/${left}/ vs /${right}/`;
            if (deduped[key]) {
                deduped[key].count += 1;
            } else {
                deduped[key] = { key, left, right, count: 1 };
            }
        });
        return [...Object.values(deduped)];
    }

    render() {
        const data = this.uniquePairs();

        const columns = [
            {
                title: 'Phonemes',
                dataIndex: 'key',
                key: 'key',
                align: 'center'
            },
            {
                title: 'Pairs',
                dataIndex: 'count',
                key: 'count',
                align: 'right'
            }
        ];

        return <>
            <Row gutter={[16, 16]} style={{ textAlign: "left" }}>
                <Col span={12} style={{ textAlign: "right", lineHeight: "32px" }}>
                    Pairs to train
            </Col>
                <Col span={12}>
                    <InputNumber
                        min={1}
                        max={Object.keys(this.props.pairs).length}
                        value={this.state.pairsToTrain}
                        onChange={value => this.setState({ pairsToTrain: value })}
                    />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col offset={1} span={22}>
                    <Table dataSource={data}
                        columns={columns}
                        rowSelection={{
                            type: "checkbox",
                            selectedRowKeys: this.state.selectedPairKeys,
                            onChange: (selectedPairKeys, _) => {
                                console.log("From", this.state.selectedPairKeys)
                                console.log("To", selectedPairKeys)
                                this.setState({ selectedPairKeys });
                            }
                        }}
                        sortedInfo={{ order: "ascend", columnKey: "label" }} />
                </Col>
            </Row>

            <Button
                type="primary"
                onClick={this.onComplete.bind(this)}
                disabled={this.state.selectedPairKeys.length === 0}>
                Start training
            </Button>
        </>;
    }
}

export default SessionOptions;
