import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { Request } from './login';
import { config } from './../../config';
import dbConnect from '../../lib/dbConnect';
import { User } from '../../models/User';

//* This function generates the Authentication Token
export async function generateAuthToken(id: number) {
  const token = await jwt.sign({ id: id }, config.jwtSecret);
  return token;
}

export default async function handler(req: Request, res: NextApiResponse) {
  const { method } = req;

  //* Used to connect to the database;
  await dbConnect();

  //* Switches between request methods
  switch (method) {
    //* Returns all the users present in the database
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (err: any) {
        res.status(400).json({ error: err.message });
      }
      break;

    //* Adds new users to the database
    case 'POST':
      try {
        //* Checks if the user is already present
        const userPresent = await User.findOne({ username: req.body.username });
        if (userPresent) {
          throw new Error('Username already present');
        }

        //* Hashing the password
        const hashedPassword = await bcrypt.hash(req.body.password, 8);

        //* Adding the user to the database
        const user = await User.create({
          username: req.body.username,
          password: hashedPassword,
        });
        if (user) {
          //* Generating and saving the Authentication token
          const token = await generateAuthToken(user._id);
          user.tokens.push(token);
          await user.save();

          //* Sending the success message to the user
          return res.status(201).json({ success: true, user: user, token });
        }
        //* Sending appropriate message back to the user
        res
          .status(400)
          .json({ success: false, error: 'Unable to sign up user' });
      } catch (err: any) {
        //* This catches any error if present in the previous code block
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    //* This runs when method specified by the client is not present in the switch case
    default:
      res.status(405).json({ success: false, error: 'Method Not Allowed!' });
      break;
  }
}
