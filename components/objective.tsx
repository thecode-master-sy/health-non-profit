"use client";

export const Objective = ({
  numbering,
  content,
}: {
  numbering: string;
  content: string;
}) => {
  return (
    <div className="flex gap-4 mt-4">
      <span className="align-top font-semibold text-primary-light">
        {numbering}
      </span>
      <p>{content} </p>
    </div>
  );
};
