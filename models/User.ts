// models/User.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
