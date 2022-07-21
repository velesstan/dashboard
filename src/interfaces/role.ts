import type { BaseEntity } from './entity';

export interface Role extends BaseEntity {
    readonly title: string;
    readonly description: string;
}
