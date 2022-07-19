import { BaseEntity } from './entity';

export interface Balance extends BaseEntity {
    readonly _id: string;
    readonly code: string;
    readonly category: string;
    readonly title: string;
    readonly unit: string;
    readonly income: number;
    readonly outcome: number;
    readonly startBalance: number;
    readonly endBalance: number;
}
