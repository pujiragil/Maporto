import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} storageKey="theme" themes={["light", "dark"]} defaultTheme="dark">
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
