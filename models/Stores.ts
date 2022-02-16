import { Schema, model, models } from 'mongoose';

export interface StoresType {
  name: string;
  timings: string[];
  address: string;
  distance: number;
  save(): () => {};
}

const StoreSchema = new Schema<StoresType>({
  name: {
    type: String,
    default: '',
    required: true,
  },
  timings: [{ type: String }],
  address: {
    type: String,
    default: '',
    required: true,
  },
  distance: {
    type: Number,
    default: 0,
    required: true,
  },
});

export const Stores = models.Store || model<StoresType>('Store', StoreSchema);
