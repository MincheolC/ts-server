import mongoose from 'mongoose';

export type CategoryDocument = mongoose.Document & {
  id: mongoose.Types.ObjectId;
  name: string;
}

const categorySchema = new mongoose.Schema<CategoryDocument>(
  {
    name: { type: String, unique: true },
  }, {
    timestamps: true,
  }
);

export const Category = mongoose.model<CategoryDocument>('Category', categorySchema);