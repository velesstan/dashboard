import React, { ChangeEvent, useState } from 'react';
import { Col, Input, Row, Select } from 'antd';

import { useReadHoldersQuery, useReadWaybillsQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import DatePicker from 'components/CommonDatePicker';

import columns from './columns';
import { TransactionsTable } from '../components/TransactionsTable';

export const WaybillsList: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<Record<string, unknown>>();
    const { data, isFetching, refetch } = useReadWaybillsQuery(searchQuery);

    const holders = useReadHoldersQuery().data || [];

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        setSearchQuery(prev => ({
            ...prev,
            [target.name]: target.value,
        }));
    };

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
            >
                <Row gutter={24}>
                    <Col>
                        <Input
                            name='serial'
                            placeholder='Номер накладной'
                            onChange={handleFilterChange}
                        />
                    </Col>
                    <Col>
                        <DatePicker.RangePicker
                            onChange={([startDate, endDate]) => {
                                handleFilterChange({
                                    target: {
                                        name: 'startDate',
                                        value: startDate.format('YYYY-MM-DD'),
                                    },
                                } as ChangeEvent<HTMLInputElement>);
                                handleFilterChange({
                                    target: {
                                        name: 'endDate',
                                        value: endDate.format('YYYY-MM-DD'),
                                    },
                                } as ChangeEvent<HTMLInputElement>);
                            }}
                        />
                    </Col>
                    <Col flex={'auto'}>
                        <Select
                            style={{ width: '100%' }}
                            placeholder='Выбрать склад'
                            options={holders.map(h => ({
                                label: h.title,
                                value: h._id,
                            }))}
                            onChange={value =>
                                handleFilterChange({
                                    target: {
                                        name: 'source',
                                        value,
                                    },
                                } as ChangeEvent<HTMLInputElement>)
                            }
                        />
                    </Col>
                    <Col flex={'auto'}>
                        <Select
                            style={{ width: '100%' }}
                            placeholder='Выбрать склад'
                            options={holders.map(h => ({
                                label: h.title,
                                value: h._id,
                            }))}
                            onChange={value =>
                                handleFilterChange({
                                    target: {
                                        name: 'destination',
                                        value,
                                    },
                                } as ChangeEvent<HTMLInputElement>)
                            }
                        />
                    </Col>
                </Row>
            </CommonTable>
        </Page>
    );
};
