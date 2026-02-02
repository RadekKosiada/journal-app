export const PAGE_LABELS = {
  HOME: "Home",
  NEW_ENTRY: "New Entry",
  LOGIN_PAGE: "Login",
  REGISTER_PAGE: "Register",
} as const;

export type Route = (typeof PAGE_LABELS)[keyof typeof PAGE_LABELS];
