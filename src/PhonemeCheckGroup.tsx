import React from 'react';
import { Col, Row, Checkbox } from 'antd';

interface PhonemeCheckGroupProps {
    name: String,
    phonemes: string[],
    initialSelection: string[],
    onChange: (selectedPhonemes: string[]) => void,
}

interface PhonemeCheckGroupState {
    selected: string[],
    indeterminate: boolean,
    all: boolean
}

class PhonemeCheckGroup extends React.Component<PhonemeCheckGroupProps, PhonemeCheckGroupState> {
    state = {
        selected: this.props.initialSelection,
        indeterminate: this.props.initialSelection.length > 0 && this.props.initialSelection.length < this.props.phonemes.length,
        all: this.props.initialSelection.length === this.props.phonemes.length
    }

    componentDidMount() {
        this.props.onChange(this.props.initialSelection);
    }

    render() {
        return <>
            <Row gutter={[16, 16]}>
                <Col offset={1} span={22}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        checked={this.state.all}
                        onChange={e => {
                            const selected = e.target.checked ? this.props.phonemes : [];
                            this.setState({
                                selected,
                                indeterminate: false,
                                all: e.target.checked,
                            });
                            this.props.onChange(selected);
                        }}>
                        <b>{this.props.name}</b>
                    </Checkbox>
                    <br />
                    <Checkbox.Group
                        options={this.props.phonemes.map(phoneme => ({
                            label: `/${phoneme}/`,
                            value: phoneme
                        }))}
                        value={this.state.selected}
                        onChange={checkboxValues => {
                            const selected = checkboxValues.flatMap(value => typeof value === "string" ? [value] : []);
                            this.setState({
                                selected,
                                indeterminate: selected.length > 0 && selected.length < this.props.phonemes.length,
                                all: selected.length === this.props.phonemes.length
                            });
                            this.props.onChange(selected);
                        }}
                    />
                </Col>
            </Row>


        </>;
    }
}

export default PhonemeCheckGroup;
