import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const ReduxProvider = dynamic(() => import("./redux-provider"), {
  ssr: false
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs-Assignment",
  description: "Generated by Majid Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
            <body className={inter.className}>
              <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
  );
}
