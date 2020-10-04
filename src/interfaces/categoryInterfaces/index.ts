export interface ICategory {
    readonly id: string;
    readonly userId: string;
    readonly title: string;
    readonly updatedAt: Date;
    readonly createdAt: Date;
    readonly deletedAt: Date | null;
}
