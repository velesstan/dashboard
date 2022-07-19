import React from 'react';
import { Card, Col, Row } from 'antd';

type TProps = {
    readonly title: string;
    readonly children: React.ReactNode;
};

export const Page: React.FC<TProps> = props => {
    const { title, children } = props;
    return (
        <React.Fragment>
            <Row>
                <h1>{title}</h1>
            </Row>
            <Row>
                <Col span={24}>
                    <Card>{children}</Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};
