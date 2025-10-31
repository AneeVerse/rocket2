import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});




<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K3442NKB7M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K3442NKB7M');
</script>


export const metadata: Metadata = {
  title: "Name Change Gazette - Your Trusted Legal Partners",
  description: "Expert legal guidance and solutions tailored to your unique needs. Relax and leave legal worries to us.",
  icons: {
    icon: '/images/nav-logo.png',
    apple: '/images/nav-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
