import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { ZodError } from "zod";
// const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter:  PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // @ts-ignore
      authorize: async (credentials) => {
        try {
          let user = null;
          console.log(credentials.email, credentials.password);

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          console.log(email, password);
          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(credentials.password)

          // logic to verify if user exists
          // user = await getUserFromDb(credentials.email, pwHash)

          // if (!user) {
          //   // No user found, so this is their first attempt to login
          //   // meaning this is also the place you could do registration
          //   throw new Error("User not found.");
          // }

          // return user object with the their profile data
          return {
            id: "1",
            name: "Faizan ahmed",
            email: "faizan@gmail.com",
          };
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
