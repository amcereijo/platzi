export declare class CategoriesController {
    getCategories(id: string, productId: string): string;
    create(payload: any): {
        message: string;
        payload: any;
    };
    update(id: number, payload: any): {
        id: number;
        payload: any;
    };
    remove(id: number): number;
}
