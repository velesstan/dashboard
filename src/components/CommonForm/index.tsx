import React, { useEffect } from 'react';
import { Button, Col, Form, FormItemProps, Input, Row, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';

import type { BaseEntity } from 'interfaces';

type TProps<T> = {
    readonly entity?: BaseEntity & T;
    readonly onSave?: (entity: BaseEntity & T) => void;
    readonly fields?: Array<
        FormItemProps & {
            component?: React.ReactElement;
            size?: number;
        }
    >;
    readonly transformEntity?: (entity: BaseEntity & T) => BaseEntity & unknown;
};

export const CommonForm = <T,>(props: TProps<T>) => {
    const {
        entity,
        fields = [],
        onSave,
        transformEntity = entity => entity,
    } = props;

    const navigate = useNavigate();

    useEffect(() => {
        form.setFieldsValue({ ...entity, ...transformEntity(entity) });
    }, [entity]);

    const [form] = useForm();

    const onAbort = (): void => {
        navigate(-1);
    };

    const onSubmit = (values: BaseEntity & T): void => {
        onSave({ ...entity, ...values });
    };

    return (
        <Form
            form={form}
            initialValues={entity}
            layout='vertical'
            onFinish={onSubmit}
        >
            <Row gutter={24}>
                {fields.map(({ component, size, ...fieldProps }, index) => (
                    <Col span={size || 8} key={index}>
                        <Form.Item {...fieldProps}>
                            {component || <Input />}
                        </Form.Item>
                    </Col>
                ))}
                <Col span={24}>
                    <Form.Item>
                        <Space>
                            <Button type='primary' htmlType='submit'>
                                Сохранить
                            </Button>
                            <Button htmlType='reset' onClick={onAbort}>
                                Отмена
                            </Button>
                        </Space>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
