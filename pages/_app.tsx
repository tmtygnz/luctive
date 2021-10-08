import type { AppProps } from "next/app";
import { DrawerProvider } from "../context/DrawerContext";
import { SignupProvider } from "../context/SignupContext";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignupProvider>
      <UserProvider>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>
      </UserProvider>
    </SignupProvider>
  );
}
export default MyApp;
