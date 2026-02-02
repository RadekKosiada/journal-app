export const ROUTES = {
  HOME: "/",
  NEW_ENTRY: "/new-entry",
  LOGIN_PAGE: "/login-page",
  REGISTER_PAGE: "/register-page",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
