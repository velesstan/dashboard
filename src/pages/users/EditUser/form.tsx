import React, { Fragment, useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import type { User } from 'interfaces';

type TProps = {
    readonly user?: User;
    readonly onSave?: (user: User) => void;
};

export const UserForm: React.FC<TProps> = props => {
    const { user, onSave } = props;

    useEffect(() => {
        form.setFieldsValue(user);
    }, [user]);

    const [form] = useForm();

    return (
        <React.Fragment>
            <Form form={form} layout='vertical' onFinish={onSave}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item name='username' label='Логин'>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name='firstName' label='Имя'>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name='lastName' label='Фамилия'>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Space>
                                <Button type='primary' htmlType='submit'>
                                    Сохранить
                                </Button>
                                <Button htmlType='reset'>Отмена</Button>
                            </Space>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    );
};
