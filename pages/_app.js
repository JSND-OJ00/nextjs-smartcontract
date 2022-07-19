import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={"KIompJc5MVudcTcqBglAN2uwJtPjjMUvIGskMkck"}
      serverUrl={"https://j972skfetln3.usemoralis.com:2053/server"}
    >
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default MyApp;
