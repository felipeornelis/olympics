import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Footer from '~components/Footer'
import GlobalStyles from '~styles/global'
import * as themes from '~themes/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
export default MyApp
