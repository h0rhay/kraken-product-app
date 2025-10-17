import type { AppProps } from "next/app";
import { LayoutProvider } from "../context/LayoutContext";
import "../styles/globals.css";
import "../styles/desktop-layout.css";

function OctoApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}

export default OctoApp;
