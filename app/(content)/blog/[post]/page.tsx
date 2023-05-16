import { Container, Title } from "@/components/utility";
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import stackImage from "@/public/images/about.jpg";
import Link from "next/link";

type ParamsType = {
  params: {
    post: string;
  };
};

export default async function Page({ params: { post } }: ParamsType) {
  return (
    <Container className="py-9">
      <div className="grid grid-cols-5 gap-4 relative">
        <div className="col-span-5 md:col-span-3">
          <div className="flex gap-3">
            <span>Written by: TheCodemaster</span>

            <span>20 May 2023</span>
          </div>

          <div>
            <Title>How to Learn OOP</Title>
          </div>

          <div className="relative rounded overflow-hidden aspect-[1/1] mt-4">
            <Image
              src={stackImage}
              layout="fill"
              objectFit="cover"
              alt="article-image"
            />
          </div>

          <div className="mt-4">
            <p className="leading-loose">
              OOP is a very popular style of programming among developers. it
              helps in code organization, re-usuabilty especially in big
              projects where the code structure can be very strainous. The
              Principle of oop are very straighfoward. In OOP instead of
              creating functions or procedural way, we create and object, mostly
              what we call classes. Lets see an example a social media app,
              where users are allowed to carry out numerious functionalities,
              the code can have a user class with methods and properties related
              to a typical user.{" "}
            </p>
          </div>
        </div>

        <div className="md:col-span-2 col-span-5">
          <div>
            <div className="flex justify-between">
              <div>
                <p className="uppercase">share</p>
              </div>

              <div className="flex gap-2">
                <FaTwitter />
                <FaLink />
              </div>
            </div>

            <div className="mt-4">
              <p className="uppercase">related posts</p>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-3 items-center">
                  <div className="relative w-[100px] aspect-[2/1] rounded overflow-hidden">
                    <Image
                      src={stackImage}
                      layout="fill"
                      objectFit="cover"
                      alt="related-article-image"
                    />
                  </div>

                  <div>
                    <p>How to Succeed as a startup</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="relative w-[100px] aspect-[2/1] rounded overflow-hidden">
                    <Image
                      src={stackImage}
                      layout="fill"
                      objectFit="cover"
                      alt="related-article-image"
                    />
                  </div>

                  <div>
                    <p>How to Succeed as a startup</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="relative w-[100px] aspect-[2/1] rounded overflow-hidden">
                    <Image
                      src={stackImage}
                      layout="fill"
                      objectFit="cover"
                      alt="related-article-image"
                    />
                  </div>

                  <div>
                    <p>How to Succeed as a startup</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="relative w-[100px] aspect-[2/1] rounded overflow-hidden">
                    <Image
                      src={stackImage}
                      layout="fill"
                      objectFit="cover"
                      alt="related-article-image"
                    />
                  </div>

                  <div>
                    <p>How to Succeed as a startup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex justify-center">
        <Link href="/blog">
            <button className="btn-primary">Back To Blog</button>
        </Link>
      </div>
    </Container>
  );
}
