"use client";
import {
  ContainerInterface,
  FlexContainerInterface,
  GridContainerInterface,
  ResponsiveGridContainerInterface,
  SectionInterface,
  TopographyInterface,
  ButtonInterface,
} from "@/modules/components-interface";

export const Container = ({ children, className }: ContainerInterface) => {
  return (
    <div
      className={`md:container md:mx-auto p-2${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};

export const FlexContainer = ({
  children,
  className,
  gap,
  center,
  direction,
}: FlexContainerInterface) => {
  return (
    <div
      className={`flex${gap ? ` gap-${gap}` : " gap-4"}${
        center ? " justify-center items-center" : ""
      }${direction == "column" ? " flex-col" : " flex-col md:flex-row"}${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};

export const GridContainer = ({
  children,
  gap,
  className,
  rows,
  columns,
}: GridContainerInterface) => {
  return (
    <div
      className={`grid${columns ? ` grid-cols-${columns}` : ` md:grid-cols-2`}${
        rows ? ` grid-rows-${rows}` : ""
      }${gap ? ` gap-${gap}` : " gap-4"}${className ? " " + className : ""}`}
    >
      {children}
    </div>
  );
};

export const ResponsiveGridContainer = ({
  children,
  gap,
  className,
  minSize,
}: ResponsiveGridContainerInterface) => {
  return (
    <div
      className={`grid orange responsive${gap ? ` gap-${gap}` : " gap-4"}${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};

export const Section = ({
  children,
  className,
  separation,
}: SectionInterface) => {
  return (
    <section className={`mt-${separation}${className ? " " + className : ""}`}>
      {children}
    </section>
  );
};

export const Text = ({ children, size, className }: TopographyInterface) => {
  return (
    <p
      className={`tracking-wide leading-normal${
        size ? ` text-[${size}]` : ` fs-small`
      }${className ? " " + className : ""}`}
    >
      {children}
    </p>
  );
};

export const Title = ({
  children,
  size,
  className,
  weight,
}: TopographyInterface) => {
  return (
    <h1
      className={`leading-normal${
        weight ? ` font-[${weight}]` : ` font-extrabold`
      }${size ? ` text-[${size}]` : ` fs-large`}${
        className ? " " + className : ""
      }`}
    >
      {children}
    </h1>
  );
};

export const SubTitle = ({
  children,
  size,
  className,
  weight,
}: TopographyInterface) => {
  return (
    <h2
      className={`leading-loose${weight ? ` font-[${weight}]` : ` font-bold`}${
        size ? ` text-[${size}]` : ` fs-mid`
      }${className ? " " + className : ""}`}
    >
      {children}
    </h2>
  );
};

export const Button = ({ children, className, rounded }: ButtonInterface) => {
  return (
    <button
      className={`px-2 py-1 text-white bg-primary${
        rounded ? " rounded-md" : ""
      }${className ? " " + className : ""}`}
    >
      {children}
    </button>
  );
};
