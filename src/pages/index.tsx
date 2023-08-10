import { GetStaticProps } from "next";
import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "../lib/stripe";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageURL} width={520} height={480} alt="" />
            <footer>

              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

//getStaticProps gera uma pagina SSG ou seja não é redenrizada nem fica fazendo chamadas na API a todo momemnto
//getServeSideProps usado quando a pagina é redenrizada ao recarregar

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}