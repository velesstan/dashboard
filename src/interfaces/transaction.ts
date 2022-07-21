import { Holder, Product } from 'interfaces';

import { BaseEntity } from './entity';

export interface Transaction extends BaseEntity {
    product: Product;
    holder: Holder;
    quantity: number;
}
