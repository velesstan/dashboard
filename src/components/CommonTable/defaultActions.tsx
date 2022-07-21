import React from 'react';
import { Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import type { DataColumn, BaseEntity } from 'interfaces';

type DefaultActions<T> = {
    readonly onEdit?: (id: T) => void;
    readonly onDelete?: (id: T) => void;
};

const reanderDefaultActions = <T extends BaseEntity>(
    actions: DefaultActions<T>
): Array<DataColumn<T>> => {
    const { onEdit, onDelete } = actions;

    const hasActions = Object.values(actions).some(action => !!action);

    if (!hasActions) return [];

    return [
        {
            title: 'Действия',
            render: entity => (
                <React.Fragment>
                    <Space>
                        {onEdit && (
                            <Button
                                shape='circle'
                                type='text'
                                icon={<EditOutlined />}
                                onClick={() => onEdit(entity)}
                            />
                        )}
                        {onDelete && (
                            <Button
                                shape='circle'
                                type='text'
                                icon={<DeleteOutlined />}
                                onClick={() => onDelete(entity)}
                            />
                        )}
                    </Space>
                </React.Fragment>
            ),
        },
    ];
};

export default reanderDefaultActions;
