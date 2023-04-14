export interface ContainerInterface {
  children: React.ReactNode;
  className?: string;
}

export interface FlexContainerInterface extends ContainerInterface {
  gap?: number;
  center?: boolean;
  direction?: string;
}

export interface GridContainerInterface extends ContainerInterface {
  gap?: number;
  columns?: number;
  rows?: number;
}

export interface ResponsiveGridContainerInterface
  extends GridContainerInterface {
  minSize: number;
}

export interface SectionInterface extends ContainerInterface {
  separation: number;
}

export interface ButtonInterface extends ContainerInterface {
  rounded?: boolean;
  bg?: string;
}

export interface TopographyInterface extends ContainerInterface {
  weight?: number;
  size?: number;
}
