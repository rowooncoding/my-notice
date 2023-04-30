import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "fdffd6f7b0ab5962e549",
      clientSecret: "8d458bd2e97dd6826e870aead5f1995b24957a50",
    }),
  ],
  secret: "qhdks811",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
