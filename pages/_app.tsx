import { AppProps } from "next/app";
import { DataProvider } from "../context/DataContext";
import NavBar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <NavBar />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </DataProvider>
  );
}

export default MyApp;
