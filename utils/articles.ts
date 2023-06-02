import { Axios } from "@/lib/auth/axios";

export async function getAllArticles(page:number, limit:number, authorization:string) {
    try {
        const response = await Axios.get("/pagination/article-pagination", {
            params: {
                page: page,
                limit: limit
            },
            headers: {
                "Authorization": `Bearer ${authorization}`,
            }
        }) 
        
        if(response.data.error && response.data.message == 'Not Found') {
            return {error: false, articles: []}
        }
        
        return {error: false, articles: response.data}
    }catch(error) {
       return {error: error};
    }
}

export async function getArticle(id:number, authorization: string) {
   return true;
}

export async function createArticle() {
   return true 
}

export async function editArticle() {
    
}

export async function deleteArticle() {
    
}