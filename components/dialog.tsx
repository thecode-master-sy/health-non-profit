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
import Link from "next/link";

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