import { BaseEntity } from './entity';

export enum HolderTypes {
    Stock = 'stock',
    Wholesaler = 'wholesaler',
    Person = 'person',
}

export type HolderType = `${HolderTypes}`;

export interface Holder extends BaseEntity {
    readonly type: HolderType;
    readonly title: string;
}
