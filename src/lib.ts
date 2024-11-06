import { SessionOptions } from "iron-session";

// enum UserRole {
//   ADMIN,
//   USER,
// }

export interface SessionData {
  userId?: string;
  username?: string;
  role?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
  role: "USER",
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "afford-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
