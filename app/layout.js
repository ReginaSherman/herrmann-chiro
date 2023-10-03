import "./styles/globals.scss";
import { Roboto, Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "700",
  preload: false,
  variable: "--font-oswald",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  preload: false,
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
