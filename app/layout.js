import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const bigilla = localFont({
  src: [
    {
      path: "../assets/fonts/Bigilla-Bold.otf",
      display: "normal",
    },
    {
      path: "../assets/fonts/Bigilla.otf",
      display: "normal",
    },
  ],
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "The Chronicler",
  description: "Version 2.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
