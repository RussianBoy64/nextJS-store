import { Providers } from "./providers";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Wrapper>
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
