export const PAGE_LABELS = {
  HOME: "Home",
  NEW_ENTRY: "New Entry",
} as const;

export type Route = (typeof PAGE_LABELS)[keyof typeof PAGE_LABELS];
