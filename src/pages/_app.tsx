/* eslint-disable @next/next/no-img-element */
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
