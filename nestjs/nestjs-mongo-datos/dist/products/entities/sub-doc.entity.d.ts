/// <reference types="mongoose" />
export declare class SubDoc {
    name: string;
    description: string;
}
export declare const SubDocSchema: import("mongoose").Schema<import("mongoose").Document<SubDoc, any>, import("mongoose").Model<any, any, any>, undefined>;
