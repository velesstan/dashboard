import React from 'react';

export type BaseEntity = {
    readonly _id: string;
    readonly enabled: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
};

export type DataColumn<T extends BaseEntity> = {
    readonly title: string;
    readonly dataIndex?: keyof T | [keyof T, ...string[]];
    readonly render?: (entity: T) => React.ReactElement | string;
    readonly align?: 'right';
    width?: number | string;
};
