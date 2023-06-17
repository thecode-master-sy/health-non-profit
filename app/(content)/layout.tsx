import { ThemeProvider } from "@/components/theme";
import "./globals.css";
import { NavContextProvider } from "@/components/NavContext";
import { MobileNav, NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';


if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

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
          <Header />
          <ThemeProvider>{children}</ThemeProvider>
          <Footer />
        </body>
      </NavContextProvider>
    </html>
  );
}
