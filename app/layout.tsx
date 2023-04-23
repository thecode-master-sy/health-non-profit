import { ThemeProvider } from "@/components/theme";
import "./globals.css";
import { NavContextProvider } from "@/components/NavContext";
import { MobileNav, NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
          <Footer />
        </body>
      </NavContextProvider>
    </html>
  );
}
