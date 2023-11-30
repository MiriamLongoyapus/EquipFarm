'use client'
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import MainNavigation from "./Navbar/main-navigation";
import "./globals.css";



const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname()

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
       
        {
          !pathName.includes("/dashboard") && <MainNavigation/>
        }

        <div className={!pathName.includes("/dashboard") ? "md:px-[64px] h-full flex-1 ": ""}>{children}</div>
      </body>
    </html>
  );
}










