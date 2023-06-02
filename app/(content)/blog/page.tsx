import { Article } from "@/components/article";
import { Tag } from "@/components/tag";
import {
  Container,
  ResponsiveGridContainer,
  Title,
} from "@/components/utility";
import { postsData } from "@/modules/data";
import { getCurrentDate } from "@/utils/timefunctions";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

export default async function Page() {
  const posts: postsData[] = [
    {
      author: "TheCodemaster",
      title: "How To Learn OOP",
      date: "20 Jan 2022",
      description: "OOP is a very important concept in programing",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80",
      tags: ["uncategorized"],
    },

    {
      author: "TheCodemaster",
      title: "How To Learn OOP",
      date: "20 Jan 2022",
      description: "OOP is a very important concept in programing",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80",
      tags: ["uncategorized"],
    },

    {
      author: "TheCodemaster",
      title: "How To Learn OOP",
      date: "20 Jan 2022",
      description: "OOP is a very important concept in programing",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80",
      tags: ["food", "healthcare"],
    },

    {
      author: "TheCodemaster",
      title: "How To Learn OOP",
      date: "20 Jan 2022",
      description: "OOP is a very important concept in programing",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80",
      tags: ["uncategorized"],
    },
  ];

  return (
    <Container className="py-9">
      <div className="text-center">
        <p>The Blog</p>
        <Title>Writings From Our Team</Title>
        <p>
          The latest health news, interviews, and tips to maintain a good
          reproductive health
        </p>
      </div>

      <div className="mt-7 rounded overflow-hidden">
        <Link
          href={`/blog/${posts[0].title.replaceAll(" ", "-").toLowerCase()}`}
        >
          <div className="relative min-h-[450px] text-white z-[1] p-4 cursor-pointer hover-scale-image flex items-end">
            <div className="absolute left-0 top-0 w-full h-full z-[-1]">
              <Image
                src={posts[0].image}
                layout="fill"
                objectFit="cover"
                alt={posts[0].title}
                priority
                className="image"
              />
            </div>

            <div>
              <p>
                {posts[0].author} <span className="text-2xl font-bold">.</span>{" "}
                {posts[0].date}
              </p>
              <Title>{posts[0].title}</Title>
              <p className="mb-2">{posts[0].description}</p>
              <Tag className="border-white">uncategorized</Tag>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-7">
        <div className="grid md:grid-cols-3 gap-5 md:gap-4">
          {posts.slice(1).map((post, index) => (
            <Link
              href={`/blog/${post.title
                .toString()
                .replaceAll(" ", "-")
                .toLowerCase()}`}
              key={index}
            >
              <Article
                author={post.author}
                thumbnail={post.image}
                title={post.title}
                date={post.date}
                description={post.description}
                tags={post.tags}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-center">
        <button className="btn-primary">Load More</button>
      </div>
    </Container>
  );
}
