export interface BreadcrumbProperties {
  order: number;
  current: boolean;
  url: string;
  label: string;
}

export type BreadcrumbDataType = BreadcrumbProperties[];
