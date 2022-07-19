import { BaseEntity } from './entity';

export interface Category extends BaseEntity {
    readonly title: string;
    readonly priority: number;
}
