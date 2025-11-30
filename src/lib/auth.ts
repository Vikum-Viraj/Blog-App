import { betterAuth } from "better-auth";

export const auth = betterAuth({
  appName: "BlogApp",
  secret: process.env.BETTER_AUTH_SECRET,
  baseUrl: process.env.BASE_URL,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 6,
    maxPasswordLength: 128,
    autoSignIn: true
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 15 minutes
    cookieCache: {
        enabled: true,
        maxAge: 60 * 5
    },
    disableSessionRefresh: true
  },
  advanced:{
    useSecureCookies: process.env.NODE_ENV === "production",
    defaultCookieAttributes: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    }
  }
});