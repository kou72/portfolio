import fs from 'fs'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { CodeBlock } from '@/components/CodeBloc'

const productsData = [
  {
    url: 'https://meet-time.skapp.dev/',
    tech: ['React', 'Next.js', 'GitHub Pages'],
  },
  {
    url: 'https://flash-pdf-card.web.app/',
    tech: ['Dart', 'Flutter', 'Firebase', 'Cloud Vision API'],
  },
]

interface PropsType {
  products: {
    url: string
    tech: string[]
    ogTitle: string
    ogDescription: string
    ogImage: string
  }[]
  productCardPath: string
  productCardCode: string
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
          <div className="flex flex-col gap-4 w-80 mb-6" key={index}>
            <ProductCard
              url={product.url}
              tech={product.tech}
              ogTitle={product.ogTitle}
              ogDescription={product.ogDescription}
              ogImage={product.ogImage}
            />
            {/* コンポーネントをcode形式で表示、最初の一つだけ */}
            {index === 0 && (
              <CodeBlock
                path={props.productCardPath}
                code={props.productCardCode}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// プロダクトのメタ情報（タイトル、概要、画像）をURLから取得
// CodeBlockで表示するコンポーネントとコードを取得
export const getStaticProps: GetStaticProps = async () => {
  const products = await Promise.all(
    productsData.map(async (product) => {
      const url = product.url
      const tech = product.tech
      const response = await axios.get(url)
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
      return { url, tech, ogTitle, ogDescription, ogImage }
    })
  )
  const productCardPath = 'components/ProductCard.tsx'
  const productCardCode = fs.readFileSync(productCardPath, 'utf8')

  return {
    props: {
      products: products,
      productCardPath: productCardPath,
      productCardCode: productCardCode,
    },
  }
}
