"use client";
export const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`p-1 border border-solid rounded-full text-sm ${
        className ? className : ""
      }`}
    >
      {children}
    </span>
  );
};
