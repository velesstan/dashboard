import { BaseEntity } from 'interfaces';

export interface User extends BaseEntity {
    readonly username: string;
    readonly name: string;
}
