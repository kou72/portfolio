import { GetStaticProps } from 'next'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'

const productsUrl = [
  'https://meet-time.skapp.dev/',
  'https://flash-pdf-card.web.app/',
]

interface PropsType {
  products: {
    ogTitle: string
    ogDescription: string
    ogImage: string
  }[]
}

export default function Products(props: PropsType) {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Products
        </div>
        {props.products.map((product, index) => (
          <div className="w-80 mb-6" key={index}>
            <ProductCard
              ogTitle={product.ogTitle}
              ogDescription={product.ogDescription}
              ogImage={product.ogImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await Promise.all(
    productsUrl.map(async (url) => {
      const encodedUri = encodeURI(url)
      const headers = { 'User-Agent': 'bot' }
      const response = await axios.get(encodedUri, { headers })
      const html = response.data
      const dom = new JSDOM(html)
      const ogTitle = dom.window.document
        .querySelector('meta[property="og:title"]')
        ?.getAttribute('content')
      const ogDescription = dom.window.document
        .querySelector('meta[property="og:description"]')
        ?.getAttribute('content')
      const ogImage = dom.window.document
        .querySelector('meta[property="og:image"]')
        ?.getAttribute('content')
      return { ogTitle, ogDescription, ogImage }
    })
  )

  return {
    props: {
      products: products,
    },
  }
}
