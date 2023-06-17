"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/lib/ui/alert-dialog";
import { Button } from "@/components/lib/ui/button";
import { Trash } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/lib/ui/use-toast";
import { useRouter } from "next/navigation";
import {deleteArticle} from "@/utils/articles"
import {Loader2} from "lucide-react";
import {useState} from "react";
import {UpdateUserComponent} from "@/components/user"

export function CancelDialog({path}: {path?: string}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
       <Button variant={"outline"} className="h-auto py-1">cancel</Button>         
      </AlertDialogTrigger>

      <AlertDialogContent className="text-base">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Note, this editor does not save the your current progress, if you cancel now all changes would be lost         
         </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="h-auto py-1">Cancel</AlertDialogCancel>
          <AlertDialogAction className="h-auto btn-primary py-1" asChild>
            <Link href={"/studio/dashboard"}>Continue</Link>
         </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function DeleteDialog({id, user}: {id: string, user:any}) {
  const {toast} = useToast();
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const [newAccessToken, setAccessToken] = useState(null)

  async function handleDelete() {
      const response = await deleteArticle(id, user);
      setIsLoading(true);

      if(!response.error) {
          setIsLoading(false);
          setAccessToken(response.newAccessToken);
          toast({
            description: "article deleted successfully"
          })

          setTimeout(() => {
              router.push("/studio/dashboard")
          }, 4500)
      }else {
        setIsLoading(false);
        console.log(response);
      }
  }

  return (
    <UpdateUserComponent newvalue={newAccessToken ? {...user, access_token:newAccessToken}: null}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
           <Button variant="ghost" className="h-auto flex items-center gap-2">
              <Trash className="text-gray-500"/>
              <span>Delete</span>
           </Button>       
        </AlertDialogTrigger>

        <AlertDialogContent className="text-base">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-base">Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Note, this process cannot be reversed are you sure you want to continue        
           </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="h-auto py-1">Cancel</AlertDialogCancel>
            <AlertDialogAction className="h-auto btn-primary py-1" onClick={handleDelete}>
              Continue
           </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </UpdateUserComponent>
  )
}

