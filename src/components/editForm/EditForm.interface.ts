export interface IEditFormProps {
    readonly id: string;
    readonly key?: string;
    readonly title: string;
    readonly children: React.ReactElement;
    onSave(id: string, value: React.ReactText): void;
    onRemove(id: string): void;
}
