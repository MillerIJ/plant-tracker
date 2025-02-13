import { AppProps } from "next/app";
import { DataProvider } from "../context/DataContext";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <NavBar />
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
