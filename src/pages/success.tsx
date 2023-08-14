import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada!</h1>

      <ImageContainer>
        <p>
          Uhuuull <strong>André Oliveira</strong>, sua <strong>Casmiseta X</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálago
        </Link>
      </ImageContainer>
    </SuccessContainer>
  )
}
