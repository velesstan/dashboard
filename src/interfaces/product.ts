import { Category } from './category';
import { BaseEntity } from './entity';

export interface Product extends BaseEntity {
    readonly code: string;
    readonly title: string;
    readonly category: Category;
    readonly unit: string;
    readonly price_retail: number;
    readonly price_wholesale: number;
    readonly requires: Array<{
        product: Product;
        quantity: number;
    }>;
}
