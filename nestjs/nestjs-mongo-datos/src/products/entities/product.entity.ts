import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';
import { SubDoc, SubDocSchema } from './sub-doc.entity';
@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Number, index: true })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop()
  image: string;

  // embebed relationship
  @Prop(
    raw({
      name: { type: String },
      image: { type: String },
    }),
  )
  category: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;

  @Prop({ type: SubDocSchema })
  subDoc: SubDoc; // 👈 new field (1:1)

  @Prop({ type: [SubDocSchema] })
  subDocs: Types.Array<SubDoc>; // 👈 new field (1:N)
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.index({
  price: 1, // asc
  stock: -1, // desc
});
