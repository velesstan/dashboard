import { BaseEntity } from 'interfaces';

export interface Product extends BaseEntity {
    readonly code: string;
    readonly title: string;
}
