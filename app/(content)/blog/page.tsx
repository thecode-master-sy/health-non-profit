"use client";

import { LatestBlog, fetchData} from "@/components/latest-blog";
import { LoadingUI } from "@/components/loader";
import { ArticlesInterface, PaginatePublic } from "@/components/paginate";
import {
  Container,
  Title,
} from "@/components/utility";

import { Suspense, use, useState } from "react";


export default function Page() {
  const data = use(fetchData);
  

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

      <div className="mt-7">
          <Suspense fallback={<LoadingUI/>}>
              <PaginatePublic articles={data.data}/>    
          </Suspense>
      </div>
    </Container>
  );
}
