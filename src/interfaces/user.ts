import type { BaseEntity } from './entity';
import { Role } from './role';

export interface User extends BaseEntity {
    readonly role: Role;
    readonly username: string;
    readonly firstName: string;
    readonly lastName: string;
}
