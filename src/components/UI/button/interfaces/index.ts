export interface ButtonInterface {
    readonly id: string;
    readonly type: 'button' | 'submit' | 'reset';
    readonly text: string | number;
    readonly buttonRef?: React.RefObject<HTMLButtonElement>;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}