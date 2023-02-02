import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DarkModeProvider, ShowContentProvider, SwapActiveProvider } from "../components/Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <ShowContentProvider>
        <SwapActiveProvider>
          <Component {...pageProps} />
        </SwapActiveProvider>
      </ShowContentProvider>
    </DarkModeProvider>
  );
}

export default MyApp
