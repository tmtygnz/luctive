import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import { DrawerProvider } from "../context/DrawerContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </AuthProvider>
  );
}
export default MyApp;
