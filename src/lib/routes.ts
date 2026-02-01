export const ROUTES = {
  HOME: "/",
  NEW_ENTRY: "/new-entry",
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];