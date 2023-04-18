import { ThemeProvider } from "@/components/theme";
import "./globals.css";
import { NavContextProvider } from "@/components/NavContext";
import { MobileNav, NavBar } from "@/components/Navbar";

export const metadata = {
  title: "COMPHSI",
  description: "Created By Thecodemaster",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavContextProvider>
        <body>
          <MobileNav />
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </NavContextProvider>
    </html>
  );
}
