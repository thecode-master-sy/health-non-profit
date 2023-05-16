import { ThemeProvider } from "@/components/theme";
import { Footer } from "@/components/Footer";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./globals.css";

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

export const metadata = {
  title: "Studio",
  description: "Created By Thecodemaster",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      
    </html>
  );
}

