import type { BaseEntity } from './entity';
import type { RoleType } from './role';

export interface User extends BaseEntity {
    readonly role: RoleType;
    readonly username: string;
    readonly name: string;
}
