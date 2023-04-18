import { ThemeProvider } from "@/components/theme";
import "./globals.css";

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
