import { BaseEntity } from './entity';
import { Transaction } from './transaction';
import { User } from './user';

export enum WaybillActionTypes {
    Sell = 'sell',
    Utilization = 'utilization',
    Buy = 'buy',
    Import = 'import',
    Move = 'move',
    Production = 'production',
}

export enum WaybillTypes {
    Income = 'income',
    Outcome = 'outcome',
}

export enum WaybillStatusTypes {
    Active = 'active',
    Inactive = 'inactive',
    Reserved = 'reserved',
}
export type WaybillStatusType = `${WaybillStatusTypes}`;
export type WaybillType = `${WaybillTypes}`;
export type WaybillActionType = `${WaybillActionTypes}`;

export interface Waybill extends BaseEntity {
    readonly serial: number;
    readonly date: Date;
    readonly action: WaybillActionType;
    readonly user: User;
    readonly source?: string;
    readonly destination?: string;
    readonly transactions: Transaction[];
}
