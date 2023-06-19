"use client";
import {useState, useEffect} from "react";
import { Button } from "@/components/lib/ui/button";
import { getAllArticles } from "@/utils/articles";
import { CmsArticle } from "@/components/article"
import {Loader2} from "lucide-react";

interface ArticlesInterface {
	data: {}[];
	has_next: boolean;
	has_prev: boolean;
	next_page: number;
	page_data_length: number;
	prev_page?: number; 
	total_pages: number;
}

export const Paginate = ({articles, user}:{articles:ArticlesInterface; user:any})=> {
	const [reactiveArticles, setArticles] = useState<ArticlesInterface>(articles);
	const [data, setData] = useState(reactiveArticles.data);
	const [loading, setIsLoading] = useState(false);

	async function loadMore(page:number, limit:number, user:any){
		setIsLoading(true);
		const response = await getAllArticles(page, limit, user);

		if(!response.error) {
			setArticles((prevState) => ({...response.articles, data:[...prevState.data, ...response.articles.data]}));

			setData((prevState) => ([...prevState, ...response.articles.data]));
		}else {
			setIsLoading(false);
		}
	}

	console.log(data);

	return (
		<>
			<div className="grid mx:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
	            {
	                data.map((article:any, index:number) => (
	                    <CmsArticle key={index} imageUrl={article.image_url} title={article.title} date={article.date} id={article._id}/>
	                )) 
	            } 

	        </div>

        	<div className="flex justify-center">
        		{
        			reactiveArticles.has_next ? (
        				loading ? (
        					<Button disabled className="btn-primary h-auto py-1 mt-4">
			                   	<Loader2 className="mr-2 h-4 w-4 animate-spin" />
			                    loading...
			                </Button>): (
			                	<Button className="btn-primary h-auto py-1 mt-4" onClick={() => loadMore(reactiveArticles.next_page, reactiveArticles.page_data_length, user)}>Load More</Button>
			                )
        			): ""
        		}
        	</div>
        </>
	)
}