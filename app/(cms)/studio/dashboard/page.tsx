import { Auth } from "@/lib/auth/user"
import { redirect } from 'next/navigation';

export default function Page() {
    const user = Auth();


    if(!user) {
        redirect("/studio/login")
    }

    console.log(user);

    return (
        <div>this is the dashboard</div>
    )
}