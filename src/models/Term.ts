import mongoose from 'mongoose';

export type TermDocument = mongoose.Document & {
  id: mongoose.Types.ObjectId;
  word: string;
  description: string | null;
}

const termSchema = new mongoose.Schema<TermDocument>(
  {
    word: { type: String, unique: true, required: true },
    description: { type: String, default: null }
  }, {
    timestamps: true,
  }
);

export const Term = mongoose.model<TermDocument>('Term', termSchema);