import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';
import { SubDoc } from './sub-doc.entity';
export declare class Product extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    category: Record<string, any>;
    brand: Brand | Types.ObjectId;
    subDoc: SubDoc;
    subDocs: Types.Array<SubDoc>;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<any, any, any>, undefined>;
