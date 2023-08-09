import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from "../styles/pages/app"
import { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
