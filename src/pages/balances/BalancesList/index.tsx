import React, { useEffect, useState } from 'react';
import { Col, Input, Row, Select } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

import {
    useReadBalancesQuery,
    useReadCategoriesQuery,
    useReadHoldersQuery,
} from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import DatePicker from 'components/CommonDatePicker';

import columns from './columns';

export const BalancesList: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<Record<string, unknown>>();
    const { data, isFetching, refetch } = useReadBalancesQuery(searchQuery);

    const [code, setCode] = useState<string>();
    const [startDate, setStartDate] = useState<Dayjs>(
        dayjs().subtract(1, 'month')
    );
    const [endDate, setEndDate] = useState<Dayjs>(dayjs());
    const [holder, setHolder] = useState<string>();
    const [category, setCategory] = useState<string>();

    const holders = useReadHoldersQuery().data || [];
    const categories = useReadCategoriesQuery().data || [];

    useEffect(() => {
        setSearchQuery(prev => ({
            ...prev,
            code,
            startDate: startDate?.format('YYYY-MM-DD'),
            endDate: endDate?.format('YYYY-MM-DD'),
            holder,
            category,
        }));
    }, [code, startDate, endDate, holder, category]);

    return (
        <Page title='Накладные'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
                hasDefaultColumns={false}
            >
                <Row gutter={24}>
                    <Col>
                        <Input
                            placeholder='Поиск по модели'
                            onChange={({ target: { value } }) => setCode(value)}
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
                            onChange={setHolder}
                        />
                    </Col>
                    <Col flex={'auto'}>
                        <Select
                            style={{ width: '100%' }}
                            placeholder='Выбрать категорию'
                            options={categories.map(h => ({
                                label: h.title,
                                value: h._id,
                            }))}
                            onChange={setCategory}
                        />
                    </Col>
                </Row>
            </CommonTable>
        </Page>
    );
};
