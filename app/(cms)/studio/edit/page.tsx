"use client"
import { useSearchParams } from 'next/navigation';
import { Container, SubTitle} from "@/components/utility";
import { CancelDialog } from "@/components/dialog";
import { Input } from "@/components/lib/ui/input";
import { Label } from "@/components/lib/ui/label";
import { Textarea } from "@/components/lib/ui/textarea";
import { Separator } from "@/components/lib/ui/separator"
import { Button } from "@/components/lib/ui/button"
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/components/lib/ui/use-toast";
import { editArticleTitle, editArticleBody } from "@/utils/articles";
import { redirect, useRouter } from "next/navigation";
import { Auth } from "@/lib/auth/user";
import { UpdateUserComponent } from "@/components/user";

export default function Page() {
    const user = Auth();

	useEffect(() => {
	    if(!user) {
	        redirect("/studio/login");
	    }
    }, [])


	const [title, setTitle] = useState({updating: false, value: ""});
	const [body, setBody] = useState({updating: false, value: ""});
	const [newAccessToken, setAccessToken] = useState(null)

	const {toast} = useToast();
	

	const searchParams = useSearchParams();

	const id = searchParams.get("id");

	console.log(id);

	async function updateTitle(e) {
		e.preventDefault();

		setTitle((prevState) => ({...prevState, updating: true}))

		const response = await editArticleTitle(title.value, id, user);

		if(!response.error) {
			setTitle((prevState) => ({value: "", updating: false}))
			setAccessToken(response.newAccessToken);

			toast({
				description: "title has been updated successfully"
			})
		}else {
			setTitle((prevState) => ({value:"", updating: false}))
			console.log(response.error);
		}
	}

	async function updateImage(e) {

	}

	async function updateBody(e) {
		e.preventDefault()

		setBody((prevState) => ({...prevState, updating: true}));

		const response = await editArticleBody(body.value, id, user);

		if(!response.error) {
			setBody((prevState) => ({value:"", updating:false}));
			setAccessToken(response.newAccessToken);

			toast({
				description: "Article body has been updated successfully"
			})
		}else {
			setBody((prevState) => ({...prevState, updating: false}))
			console.log(response.msg)
		}
	}

	return(
		<Container className="py-9">
			<UpdateUserComponent newvalue={newAccessToken ? {...user, access_token:newAccessToken}: null}>
				<div className="flex justify-between items-center">
					<SubTitle>Edit Article</SubTitle>
					<CancelDialog/>
				</div>

				<div className="mt-7 max-w-[800px]">
					<div>
						<SubTitle>Update Title</SubTitle>
						<Separator className="my-4"/>

						<form onSubmit={(e) => updateTitle(e)}>
							<Input value={title.value} className="h-auto" placeholder="update article title" onChange={(e) => setTitle((prevState) => ({...prevState, value:e.target.value}) )}/>
							 {
		                            title.updating ? (
		                                <Button disabled className="btn-primary h-auto py-1 mt-4">
		                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
		                                    Please wait
		                                </Button>
		                            ):(
		                                <Button className="btn-primary h-auto py-1 mt-4">Update</Button>
		                            )
		                        } 
						</form>
					</div>

					<div className="mt-7">
						<SubTitle>Update Image</SubTitle>
						<Separator className="my-4"/>

						<form>
							<Input type="file" className="h-auto" placeholder="update article title"/>
							 {
		                            title.updating ? (
		                                <Button disabled className="btn-primary h-auto py-1 mt-4">
		                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
		                                    Please wait
		                                </Button>
		                            ):(
		                                <Button className="btn-primary h-auto py-1 mt-4">Update</Button>
		                            )
		                        } 
						</form>
					</div>

					<div className="mt-7">
						<SubTitle>Update Blog Body</SubTitle>
						<Separator className="my-4"/>

						<form onSubmit={(e) => updateBody(e)}>
							 <Textarea value={body.value} placeholder="Update the Blog Body" onChange={(e) => setBody((prevState) => ({...prevState, value:e.target.value}))} className="mt-2 min-h-[600px] text-base"></Textarea>
							 {
		                            body.updating ? (
		                                <Button disabled className="btn-primary h-auto py-1 mt-4">
		                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
		                                    Please wait
		                                </Button>
		                            ):(
		                                <Button className="btn-primary h-auto py-1 mt-4">Update</Button>
		                            )
		                        } 
						</form>
					</div>

				</div>
			</UpdateUserComponent>
		</Container>
	)
}