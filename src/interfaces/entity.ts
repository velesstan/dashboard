import React from 'react';

export type BaseEntity = {
    readonly _id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
};

export type DataColumn<T> = {
    readonly title: string;
    readonly dataIndex?: keyof T | [keyof T, ...string[]];
    readonly render?: (entity: BaseEntity & T) => React.ReactElement | string;
};
