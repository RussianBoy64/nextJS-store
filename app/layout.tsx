import { Providers } from "./providers";
import Header from "@/components/Header";

import "./globals.scss";
import Wrapper from "@/components/Wrapper";

export const metadata = {
  title: "NextShop | Home",
  description: "Online shop application created with NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Wrapper>
          <Header />
          <Providers>{children}</Providers>
        </Wrapper>
      </body>
    </html>
  );
}
