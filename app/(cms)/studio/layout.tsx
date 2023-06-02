import { ThemeProvider } from "@/components/theme";
import { Footer } from "@/components/Footer";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./globals.css";
import { CmsNavBar} from "@/components/Navbar";
import { CmsHeader } from "@/components/header";
import { NavContextProvider } from "@/components/NavContext";
import { cookies } from "next/headers";

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

export const metadata = {
  title: "Studio",
  description: "Created By Thecodemaster",
};

const Links = [
  {
    label: "Dashboard",
    path: "/studio/dashboard",
  },
  {
    label: "Articles",
    path: "/studio/articles",
  },
  {
    label: "Settings",
    path: "/studio/settings",
  },
  {
    label: "Team",
    path: "/studio/team",
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies()
  
  const user = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")!.value) : null;
  
  return (
    <html lang="en">
         
        <body>
          
          <ThemeProvider>
            <NavContextProvider>
                {user ? <CmsHeader Links={Links} accountType={user?.type}/>: ""}
                {children}
                <div>
                  <p className="text-center">© 2023 COMPSHI. All rights reserved</p>
                </div>
             </NavContextProvider>
          </ThemeProvider>
        </body>
      
    </html>
  );
}

