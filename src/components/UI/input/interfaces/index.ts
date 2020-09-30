export interface InputInterface {
    readonly id: string;
    readonly type: string;
    readonly inputRef?: React.RefObject<HTMLInputElement>;
    readonly placeholder?: string;
    readonly value?: React.ReactText;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}