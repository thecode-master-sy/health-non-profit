import { baseURL } from "@/lib/auth/axios";
import {fetchAuth} from "@/utils/articles";
import { updateUser } from "@/lib/auth/user";

export async function updateUserName(name:string, user:any) {
	try {
		const url = `${baseURL}/api/admin/update/name`;

		const requestBody = {
			new_name: name,
		}

		const options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(requestBody)
		}

		const result = await fetchAuth(url, options, user);

		const {response} = result;
		const newAccessToken = result.newAccessToken?result.newAccessToken:null

		if(!response.ok) {
			return {error: true, msg:"cannot udate name, something went wrong", }
		}

		const data = await response.json();

		return {error:false, msg:"name has been successfully updated", newAccessToken:newAccessToken}
	}catch(error) {
		console.log(error);
		return {error: true, msg:"something went wrong"}
	}	
}

export async function updateUserPassword(password:string, newPassword:string, user:any) {
	try {
		const url = `${baseURL}/api/admin/update/password`;

		const requestBody = {
			password: password,
			new_password: newPassword,
		}

		const options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			}, 
			body: JSON.stringify(requestBody)
		}

		const result = await fetchAuth(url, options, user);

		const { response } = result;

		const newAccessToken = result.newAccessToken?result.newAccessToken:null;

		if(!response.ok) {
			return { error:true, msg:"something went wrong, cannot update password"}
		}

		const data = await response.json();

		return {error: false, msg: "password has been updated successfully", newAccessToken: newAccessToken};
	}catch(error) {
		console.log(error)
		return {error: true, msg:"something went wrong"}
	}
}

export async function updateUserEmail(email:string, user:any) {
	try {
		const url = `${baseURL}/api/admin/update/email`;

		const requestBody = {
			new_email: email
		}

		const options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(requestBody)
		}

		const result = await fetchAuth(url, options, user);

		const { response } = result;

		const newAccessToken = result.newAccessToken?result.newAccessToken:null;

		if(!response.ok) {
			return {error: true, msg:"something went wrong"}
		}

		const data = await response.json();

		return { error:false, msg:"email has been successfully updated", newAccessToken: newAccessToken}
	}catch(error) {
		console.log(error);
		return{error:true, msg:"something went wrong"}
	}
}
