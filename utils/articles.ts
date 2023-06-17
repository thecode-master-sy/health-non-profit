import AxiosAuth, { Axios, baseURL } from "@/lib/auth/axios";
import { getAccessToken } from "@/lib/auth/token";

export async function fetchAuth (url:string, options:any, user:any) {
    const fetchOptions = {...options, headers: {
        ...options.headers,
        Authorization: `Bearer ${user.access_token}`
    }}

    const response = await fetch(url, fetchOptions);

    if(response.status == 401) {
        const newAccessToken = await getAccessToken(user, user.refresh_token);

        fetchOptions.headers.Authorization = `Bearer ${newAccessToken}`;


        const response = await fetch(url, fetchOptions);

        return {
            error:false,
            response: response,
            newAccessToken: newAccessToken
        }
    }

    return {error:false, response:response};
}

export async function getAllArticles(page:number, limit:number, user:any) {
    const url = new URL(`${baseURL}/api/article/pagination/article-pagination`);

    url.searchParams.append("page", `${page}`);
    url.searchParams.append("limit", `${limit}`);

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const result = await fetchAuth(url.toString(), options, user);
        const {response} = result;
        const newAccessToken = result.newAccessToken?result.newAccessToken:null

        if(!response.ok) {
            return {error: true, articles: null}
        }

        const data = await response.json();


        return {error: false, articles: data.data, newAccessToken: newAccessToken};
    }catch(error) {
        console.log(error);
        return {error:true}
    }
    
}

export async function getArticle(id:string, user:any) {
   const url = `${baseURL}/api/article/get-article/${id}`;

   const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
   }

   try {
        const result = await fetchAuth(url, options, user);
        const {response} = result;

        const newAccessToken = result.newAccessToken?result.newAccessToken:null;

        if(!response.ok) {
            return {error: true, article:null}
        }

        const data = await response.json()

        return {error:false, article:data.data, newAccessToken:newAccessToken}
   }catch(error) {
        return {error:true}
   }
}

export async function createArticle(data:{title:string; image_url:string, body:string}) {
    try {
        const response = await AxiosAuth.post("/api/article/create-article", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if(response.data.error) {
           return {error: true, mesage: response.data.message} 
        }

        return {error:false, message:"article successfully created"}
    }catch (error) {
       return {error: true, message: "a problem occurred"} 
    }
}

export async function editArticleImage() {

}

export async function editArticleTitle(title:string,id:string, user:any) {
    try {
        const url = `${baseURL}/api/article/update/update-title/${id}`;

        const requestBody = {
            title: title,
        }

        const options = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }

        const result = await fetchAuth(url, options, user);

        const {response} = result;
        const newAccessToken = result.newAccessToken?result.newAccessToken:null;

        if(!response.ok) {
            return {error: true, msg:"updating field failed"}
        }

        const data = await response.json();

        return {error:false, msg:"updated the title successfully", newAccessToken: newAccessToken}

    }catch(error) {
        console.log(error);
        return {error: true, msg: "something went wrong"}
    }
    
}

export async function editArticleBody(body:string, id:string, user:any) {
    try {
        const url = `${baseURL}/api/article/update/update-body/${id}`;

        const requestBody = {
            body: body,
        }

        const options = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }

        const result = await fetchAuth(url, options, user);

        const {response} = result;
        const newAccessToken = result.newAccessToken?result.newAccessToken:null;

        if(!response.ok) {
            return {error: true, msg:"updating field failed"}
        }

        const data = await response.json();

        return {error:false, msg:"updated the title successfully", newAccessToken: newAccessToken}

    }catch(error) {
        console.log(error);
        return {error: true, msg: "something went wrong"}
    }
}

export async function deleteArticle(id:string, user:any) {
    try {
        const url = `${baseURL}/api/article/delete/${id}`;

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const result = await fetchAuth(url, options, user);

        const {response} = result;

        const newAccessToken = result.newAccessToken?result.newAccessToken:null;

        if(!response.ok) {
            return {error: true, msg:"something went wrong"}
        }

        const data = await response.json();

        console.log(data)

        return {error:false, msg:"article has been deleted successfully", newAccessToken:newAccessToken};
    }catch(error) {
        console.log(error)
        return {error: true, msg:"something went wrong"}
    }
}

export async function getAllArticlesServer(authorization:string, page:number, limit:number) {

}