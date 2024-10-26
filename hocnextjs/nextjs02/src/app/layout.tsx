import { Metadata } from "next";

export const metadata: Metadata = {
  title: "F8 - Học lập trình để đi làm",
  description: "F8 chuyên đào tạo lập trình web số 1 Việt Nam",
  keywords: "f8, sơn đặng, html-css, js, react",
  openGraph: {
    title: "F8 - Học lập trình để đi làm",
    images: ["https://fullstack.edu.vn/images/img.jpg"],
  },
  icons: {
    icon: "https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
