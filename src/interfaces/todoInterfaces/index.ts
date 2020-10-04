export interface ITodo {
    readonly id: string;
    readonly title: string;
    readonly userId: string;
    readonly categoryId: string;
    readonly updatedAt: Date;
    readonly createdAt: Date;
    readonly deletedAt: Date | null;
}
