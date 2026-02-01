export const ROUTES = {
  HOME: "/",
  NEW_ENTRY: "/new-entry",
  LOGIN_PAGE: "/login-page",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
