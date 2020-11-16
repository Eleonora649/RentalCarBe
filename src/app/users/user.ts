import { Roles } from './roles';

export class User {

    id: number;
    name: string;
    surname: string;
    date: string;
    email: string;
    password: string;
    roles: Roles;
}