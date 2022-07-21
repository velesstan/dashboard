import { Holder, Product } from 'interfaces';

import { BaseEntity } from './entity';
import type {
    WaybillActionType,
    WaybillStatusType,
    WaybillType,
} from './waybill';

export interface Transaction extends BaseEntity {
    type: WaybillType;
    action: WaybillActionType;
    status: WaybillStatusType;
    product: Product;
    holder: Holder;
    quantity: number;
}
