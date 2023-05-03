"use client";

import Image from "next/image";
import { SubTitle, Title } from "./utility";
import { Tag } from "./tag";

type ArticleProps = {
  thumbnail: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags?: string[];
};

export const Article = ({
  thumbnail,
  title,
  date,
  author,
  description,
  tags,
}: ArticleProps) => {
  return (
    <div>
      <div className="thumbnail relative aspect-[1/1] rounded overflow-hidden hover-scale-image">
        <Image
          src={thumbnail}
          layout="fill"
          objectFit="cover"
          className="image"
          alt={title}
        />
      </div>

      <div className="mt-4">
        <div>
          <p>
            {author} <span>.</span> {date}
          </p>
        </div>

        <div>
          <SubTitle>{title}</SubTitle>
        </div>

        <p>{description}</p>

        <div className="flex gap-2 mt-2 text-black">
          {tags?.map((tag, index) => (
            <Tag key={index} className="border-gray-400">
              {tag.toString()}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};
