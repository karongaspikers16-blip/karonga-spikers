import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Simple hardcoded credentials for demo - replace with env vars in production
        const adminUsername = process.env.ADMIN_USERNAME || "admin";
        const adminPassword = process.env.ADMIN_PASSWORD || "karonga2024";
        
        if (
          credentials?.username === adminUsername &&
          credentials?.password === adminPassword
        ) {
          return { id: "1", name: "Admin", email: "admin@karongaspikers.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "karonga-spikers-secret-key",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
