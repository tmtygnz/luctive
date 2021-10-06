import type { AppProps } from "next/app";
import { DrawerProvider } from "../context/DrawerContext";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </UserProvider>
  );
}
export default MyApp;
