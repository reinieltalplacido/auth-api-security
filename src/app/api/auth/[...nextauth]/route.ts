import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // here you'll check user with Prisma + bcrypt
        return { id: "1", name: "Reiniel", email: credentials?.email };
      },
    }),
  ],
  pages: {
    signIn: "/login", 
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
