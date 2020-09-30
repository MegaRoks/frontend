export interface ILoaderPayload {
    readonly isLoader: boolean;
}

export interface ILoaderAction {
    readonly type: string,
    readonly payload: ILoaderPayload,
}