import React from 'react';
import { Button, Table } from 'antd';

// pairs, outcomes, onDismiss
function SessionStats(props) {
    const outcomeSummary = summarizeOutcomes(props);

    const stats = Object.keys(outcomeSummary).map(label => {
        const { successes, failures } = outcomeSummary[label];
        const reps = successes + failures;
        const accuracy = successes / reps;
        return ({ label, reps, accuracy });
    });

    const columns = [
        {
            title: 'Pair',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Repetitions',
            dataIndex: 'reps',
            key: 'reps',
        },
        {
            title: 'Accuracy',
            dataIndex: 'accuracy',
            key: 'accuracy',
            render: accuracy => (accuracy * 100).toFixed(1) + "%"
        },
    ];

    return <>
        <Table
            dataSource={stats}
            columns={columns}
            sortedInfo={{ order: "ascend", columnKey: "label" }}
        />

        <Button type="primary" onClick={props.onDismiss}>
            Dismiss
        </Button>
    </>;
}


function summarizeOutcomes(props) {
    const outcomeSummary = {};
    props.outcomes.forEach(outcome => {
        const pair = props.pairs[outcome.pairId];
        const label = `/${pair.left.phoneme}/ vs /${pair.right.phoneme}/`;
        if (!outcomeSummary[label]) {
            outcomeSummary[label] = { successes: 0, failures: 0 };
        }
        if (outcome.actualAnswer === outcome.correctAnswer) {
            outcomeSummary[label].successes += 1;
        }
        else {
            outcomeSummary[label].failures += 1;
        }
    });
    return outcomeSummary;
}

export default SessionStats;