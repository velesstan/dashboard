import { BaseEntity } from 'interfaces';

export interface Category extends BaseEntity {
    readonly title: string;
    readonly priority: number;
}
