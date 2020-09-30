export interface IErrorPayload {
    readonly isError: boolean;
    readonly errorMessage: string;
}

export interface IErrorAction {
    readonly type: string;
    readonly payload: IErrorPayload;
}
