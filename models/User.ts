import mongoose from 'mongoose';

export type Id = mongoose.Schema.Types.ObjectId;

export interface UserType {
  username: string;
  password: string;
  tokens: string[];
  _id: mongoose.Schema.Types.ObjectId;
  save: () => {};
}

const UserSchema = new mongoose.Schema<UserType>({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  tokens: [
    {
      type: String,
      required: true,
    },
  ],
});

export const User =
  mongoose.models.User || mongoose.model<UserType>('User', UserSchema);
