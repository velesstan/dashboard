import React, { useEffect } from 'react';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import type { User } from 'interfaces';
import { useGetRolesQuery } from 'store/features';

type TProps = {
    readonly user?: User;
    readonly onSave?: (user: User) => void;
};

export const UserForm: React.FC<TProps> = props => {
    const { user, onSave } = props;

    const roles = useGetRolesQuery().data || [];

    useEffect(() => {
        form.setFieldsValue({ ...user, role: user?.role._id });
    }, [user]);

    const [form] = useForm();

    const handleSubmit = (values: User): void => {
        onSave({ ...user, ...values });
    };

    return (
        <React.Fragment>
            <Form form={form} layout='vertical' onFinish={handleSubmit}>
                <Row gutter={24}>
                    <Col sm={8}>
                        <Form.Item name='username' label='Логин'>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={8}>
                        <Form.Item name='password' label='Пароль'>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={8}>
                        <Form.Item name='role' label='Уровень доступа'>
                            <Select placeholder='Выбрать'>
                                <Select.Option disabled value=''>
                                    Выбрать
                                </Select.Option>
                                {roles.map(({ _id, title }) => (
                                    <Select.Option key={_id} value={_id}>
                                        {title}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col sm={8}>
                        <Form.Item name='firstName' label='Имя'>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={8}>
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
