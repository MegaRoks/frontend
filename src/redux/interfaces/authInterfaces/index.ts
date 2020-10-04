export interface IAuthPayload {
    readonly token: string | null;
}

export interface IAuthState {
    readonly isAuth: boolean;
    readonly token: string | null;
}
