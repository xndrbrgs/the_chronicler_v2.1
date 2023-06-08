import "./globals.css";
import { Merriweather } from "next/font/google";
import localFont from "next/font/local";

const brier = localFont({
  src: [
    {
      path: "../assets/fonts/Brier-Bold.otf",
      display: "normal",
    },
    {
      path: "../assets/fonts/Brier-Regular.otf",
      display: "normal",
    },
  ],
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Chronicler",
  description: "Version 2.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
