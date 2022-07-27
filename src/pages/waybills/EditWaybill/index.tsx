import React, { useState } from 'react';
import { Form, Select } from 'antd';

import { Page } from 'components/Page';
import { Waybill, WaybillActionTypes } from 'interfaces';
import {
    useReadUsersQuery,
    useReadHoldersQuery,
    useCreateWaybillMutation,
} from 'store/features';
import { getWaybillTypesMap } from 'utils';
import { CommonForm } from 'components/CommonForm';
import { ProductPicker } from 'components/ProductPicker';

export const EditWaybill: React.FC = () => {
    const [form] = Form.useForm();
    const action = Form.useWatch('action', form);

    const users = useReadUsersQuery().data || [];
    const holders = useReadHoldersQuery().data || [];

    const [createEntity] = useCreateWaybillMutation();

    const [products, setProducts] = useState([]);

    const hasSource = [
        WaybillActionTypes.Sell,
        WaybillActionTypes.Utilization,
        WaybillActionTypes.Move,
        WaybillActionTypes.Production,
    ].includes(action);
    const hasDestination = [
        WaybillActionTypes.Sell,
        WaybillActionTypes.Import,
        WaybillActionTypes.Buy,
        WaybillActionTypes.Move,
        WaybillActionTypes.Production,
    ].includes(action);

    const onSave = (entity: Waybill): void => {
        entity = Object.assign(entity, {
            products: products.map(({ quantity, product }) => ({
                _id: product._id,
                quantity,
            })),
        });
        console.log(entity);
        if (entity._id) {
            console.log('Will update: ', entity);
        } else {
            createEntity(entity);
        }
    };

    return (
        <Page title='Накладные'>
            <CommonForm
                onSave={onSave}
                form={form}
                fields={[
                    {
                        size: 4,
                        label: 'Тип накладной',
                        name: 'action',
                        component: <Select options={getWaybillTypesMap()} />,
                    },
                    ...(hasSource && [
                        {
                            size: 4,
                            label: 'Откуда',
                            name: 'source',
                            component: (
                                <Select
                                    options={holders.map(({ _id, title }) => ({
                                        label: title,
                                        value: _id,
                                    }))}
                                />
                            ),
                        },
                    ]),
                    ...(hasDestination && [
                        {
                            size: 4,
                            label: 'Куда',
                            name: 'destination',
                            component: (
                                <Select
                                    options={holders.map(({ _id, title }) => ({
                                        label: title,
                                        value: _id,
                                    }))}
                                />
                            ),
                        },
                    ]),
                    {
                        size: 4,
                        name: 'user',
                        label: 'Пользователь',
                        component: (
                            <Select
                                options={users.map(
                                    ({ _id, firstName, lastName }) => ({
                                        label: `${firstName} ${lastName}`,
                                        value: _id,
                                    })
                                )}
                            />
                        ),
                    },
                ]}
            >
                <React.Fragment>
                    <ProductPicker
                        title='Добавить продукты'
                        items={products}
                        onChange={setProducts}
                    />
                </React.Fragment>
            </CommonForm>
        </Page>
    );
};
