"use client";
import { baseURL } from "@/lib/auth/axios";
import { CmsArticle } from "./article";
import { useState, use, useMemo, useCallback } from "react";
import { ArticlesInterface } from "./paginate";


export type dataInterface = {
    admin_id?: string,
    body: string,
    created_at: string,
    title: string,
    updated_at: string,
    _id: string,
    image_url:string,
}

type PromiseStatus = 'pending' | 'fulfilled' | 'rejected';

type CustomPromise<T> =
  | { status: 'pending'; promise: Promise<T> }
  | { status: 'fulfilled'; value: T }
  | { status: 'rejected'; reason: any };


export const fetchData = fetch(`${baseURL}/api/public-article/pagination/article-pagination?page=${1}&limit=${3}`).then((res) => res.json()).catch(err => console.log(err))



export const LatestBlog = () => {
    const data =  use(fetchData);
   
    return (
        <>
        <div className="grid gap-4 mx:grid-cols-2 md:grid-cols-3 mt-4">
            {
               data.data.data.map((item:any, index:any) => (
                    <CmsArticle imageUrl={item.image_url} title={item.title} date={item.created_at} id={item._id} key={index} path="/blog"/>
               ))
            
            }
        </div>
        </>
    )
}

