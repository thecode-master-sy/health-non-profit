"use client";
import Image from "next/image";
import { SubTitle, Title } from "./utility";
import { Tag } from "./tag";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/lib/ui/card";
import noImage from "@/public/images/no-image.jpg";
import Link from "next/link";
import { FaAngleUp, FaEdit } from "react-icons/fa";

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


export const CmsArticle = ({imageUrl, title, date, id, path}:{imageUrl:string, title:string, date:string, id:string, path:string}) => {
    return (
      <Card>
          <div className="p-4">
              <div className="w-full relative overflow-hidden aspect-[1/0.8]">
                  <Image src={imageUrl ? imageUrl : noImage} fill className="object-center object-cover" priority alt={title}/>
              </div>
          </div>
                                                                
          <CardFooter className="justify-between px-4 py-4">
              <div>
                <CardTitle className="leading-normal tracking-normal">{title}</CardTitle>
                <CardDescription>{date}</CardDescription> 
              </div>
                                            
              <Link href={`${path}/${id}`}>
                  <FaEdit className="text-gray-400 text-xl"/>
              </Link>
          </CardFooter>
      </Card>
    )
}