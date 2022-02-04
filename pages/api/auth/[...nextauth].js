import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'John Doe' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        if (req.body.username && req.body.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
