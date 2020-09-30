export interface ButtonInterface {
    readonly id: string;
    readonly type: 'button' | 'submit' | 'reset';
    readonly text: string | number;
    readonly ref?: React.RefObject<HTMLButtonElement>;
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}