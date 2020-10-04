export interface IUser {
    readonly id: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly role: IUserRole;
    readonly isActive: boolean;
}

export enum IUserRole {
    ADMIN = 'admin',
    USER = 'user',
}
