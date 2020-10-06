export interface ITask {
    readonly id: string;
    readonly userId: string;
    readonly todoId: string;
    readonly title: string;
    readonly status: boolean;
    readonly updatedAt: Date;
    readonly createdAt: Date;
    readonly deletedAt: Date | null;
}
