import type { AppProps } from "next/app";
import { DrawerProvider } from "../context/DrawerContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <Component {...pageProps} />
    </DrawerProvider>
  );
}
export default MyApp;
