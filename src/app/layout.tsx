import "./globals.css"
import {Montserrat} from "next/font/google"

const montserratFont = Montserrat ({
  variable:"--font--montserratFont",
  weight:"300",
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
