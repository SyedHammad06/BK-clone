import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

import dbConnect from '../../lib/dbConnect';
import { User } from '../../models/User';
import { generateAuthToken } from './signup';

//* Adds the username and password methods to the body of the Request Protocol
export interface Request extends NextApiRequest {
  body: {
    username: string;
    password: string;
  };
}

export default async function handler(req: Request, res: NextApiResponse) {
  const { method } = req;

  //* Used to connect to the database
  await dbConnect();

  //* Switching between different http methods using switch
  switch (method) {
    //* POST Method
    case 'POST':
      try {
        //* Looking for the username in the database
        const user = await User.findOne({
          username: req.body.username,
        });

        try {
          //* Checking if the passwords match
          const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
          );

          //* If both username and password match then this block runs
          if (user && isMatch) {
            //* Generating the authentication token
            const token = await generateAuthToken(user._id);
            //* Saving it to the user model
            user.tokens = user.tokens.concat(token);
            await user.save();
            //* Sending the response to the client
            return res.json({ success: true, user, token });
          }
        } catch (err: any) {
          //* This runs if the password doesn't match
          return res
            .status(404)
            .json({ success: false, error: 'Invalid Username or Password' });
        }
        //* This runs when the username doesn't match
        res
          .status(404)
          .json({ success: false, error: 'Invalid Username or Password' });
      } catch (err: any) {
        //* This catches all the remaining errors
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    //* This is what is sent to the client if any any other method than the ones mentioned in the switch
    default:
      res.status(405).json({ success: false, error: 'Method Not Allowed!' });
  }
}
