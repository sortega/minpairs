import React from 'react';
import { Button, Col, InputNumber, Row } from 'antd';


class SessionOptions extends React.Component {
    state = {
        pairsToTrain: Object.keys(this.props.pairs).length,
    }

    onComplete() {
        this.props.onComplete(this.state)
    }

    render() {
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

            <Button type="primary" onClick={this.onComplete.bind(this)}>
                Start training
            </Button>
        </>;
    }
}

export default SessionOptions;
