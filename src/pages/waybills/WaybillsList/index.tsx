import React from 'react';
import { Col, Row } from 'antd';

import { useReadWaybillsQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';
import { TransactionsTable } from '../components/TransactionsTable';

export const WaybillsList: React.FC = () => {
    const { data, isFetching, refetch } = useReadWaybillsQuery();

    return (
        <Page title='Накладные'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
                hasDefaultColumns={false}
                expandedRowRenderer={{
                    expandedRowRender: ({ transactions }) => {
                        const incomeTransactions = transactions.filter(
                            ({ type }) => type === 'income'
                        );
                        const outcomeTransactions = transactions.filter(
                            ({ type }) => type === 'outcome'
                        );

                        return (
                            <React.Fragment>
                                <Row>
                                    <Col span={24}>
                                        <TransactionsTable
                                            items={incomeTransactions}
                                        />
                                    </Col>
                                    <Col span={24}>
                                        <TransactionsTable
                                            items={outcomeTransactions}
                                        />
                                    </Col>
                                </Row>
                            </React.Fragment>
                        );
                    },
                }}
            />
        </Page>
    );
};
