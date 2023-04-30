import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "fdffd6f7b0ab5962e549",
      clientSecret: "8d458bd2e97dd6826e870aead5f1995b24957a50",
    }),
  ],
  secret: "jwt생성시쓰는암호",
};
export default NextAuth(authOptions);
