import React from 'react';
import { Button, Table } from 'antd';
import { MinimalPairs, QuestionOutcome } from './model';
import { ColumnsType } from 'antd/lib/table';

interface SessionStatsProps {
    outcomes: QuestionOutcome[],
    pairs: MinimalPairs
    onDismiss: () => void
}

function SessionStats(props: SessionStatsProps) {
    const outcomeSummary = summarizeOutcomes(props);

    const stats = Object.keys(outcomeSummary).map(label => {
        const { successes, failures } = outcomeSummary[label];
        const reps = successes + failures;
        const accuracy = successes / reps;
        return ({ label, reps, accuracy });
    });

    const columns: ColumnsType<object> = [
        {
            title: 'Pair',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Repetitions',
            sorter: true,
            dataIndex: 'reps',
            key: 'reps',
        },
        {
            title: 'Accuracy',
            dataIndex: 'accuracy',
            key: 'accuracy',
            defaultSortOrder: 'ascend',
            sortDirections: ['ascend', 'descend'],
            sorter: true,
            render: (accuracy: number) => (accuracy * 100).toFixed(1) + "%",
        },
    ];

    return (<>
        <Table
            dataSource={stats}
            columns={columns}
            // sortedInfo={{ order: "descend", columnKey: "accuracy" }}
        />

        <Button type="primary" onClick={props.onDismiss}>
            Dismiss
        </Button>
    </>);
}

function summarizeOutcomes(props: SessionStatsProps) {
    const outcomeSummary: { [key: string]: { successes: number, failures: number } } = {};
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