export interface InputInterface {
    readonly id: string;
    readonly type: string;
    readonly ref?: React.RefObject<HTMLInputElement>;
    readonly placeholder?: string;
    readonly value?: React.ReactText;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}