import React, { useEffect, useState } from 'react';
import { Col, Input, Row, Select } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

import { useReadHoldersQuery, useReadWaybillsQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import DatePicker from 'components/CommonDatePicker';

import columns from './columns';
import { TransactionsTable } from '../components/TransactionsTable';

export const WaybillsList: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<Record<string, unknown>>();
    const { data, isFetching, refetch } = useReadWaybillsQuery(searchQuery);

    const [source, setSource] = useState<string>();
    const [destination, setDestination] = useState<string>();
    const [serial, setSerial] = useState<string>();
    const [startDate, setStartDate] = useState<Dayjs>(
        dayjs().subtract(6, 'months')
    );
    const [endDate, setEndDate] = useState<Dayjs>(dayjs());

    const holders = useReadHoldersQuery().data || [];

    useEffect(() => {
        setSearchQuery(prev => ({
            ...prev,
            serial,
            startDate: startDate?.format('YYYY-MM-DD'),
            endDate: endDate?.format('YYYY-MM-DD'),
            source,
            destination,
        }));
    }, [serial, startDate, endDate, source, destination]);

    const onCreate = () => {
        void 0;
    };

    return (
        <Page title='Накладные'>
            <CommonTable
                refetch={refetch}
                onCreate={onCreate}
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
                            onChange={({ target: { value } }) =>
                                setSerial(value)
                            }
                        />
                    </Col>
                    <Col>
                        <DatePicker.RangePicker
                            value={[startDate, endDate]}
                            onChange={([startDate, endDate]) => {
                                setStartDate(startDate);
                                setEndDate(endDate);
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
                            onChange={setSource}
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
                            onChange={setDestination}
                        />
                    </Col>
                </Row>
            </CommonTable>
        </Page>
    );
};
