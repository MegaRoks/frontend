export interface IActionCreator<PayloadT> {
    readonly type: string;
    readonly payload: PayloadT;
}
