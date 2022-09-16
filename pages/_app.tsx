import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "react-datepicker/dist/react-datepicker.css"; //_app.tsx 에 import 하면 전체로 됨

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
