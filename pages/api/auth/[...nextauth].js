import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FBProvider from 'next-auth/providers/facebook';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FBProvider({
      clientId: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
    }),
  ],
});
