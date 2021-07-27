export declare class UsersController {
    get(): string;
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
