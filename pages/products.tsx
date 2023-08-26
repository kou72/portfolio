import { GetStaticProps } from 'next'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { Header } from '@/components/Header'

export default function Products() {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Products
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const url = 'https://meet-time.skapp.dev/'
  const encodedUri = encodeURI(url)
  const headers = { 'User-Agent': 'bot' }
  const response = await axios.get(encodedUri, { headers })
  const html = response.data
  const dom = new JSDOM(html)
  const ogTitleContent = dom.window.document
    .querySelector('meta[property="og:title"]')
    ?.getAttribute('content')
  console.log(ogTitleContent)

  return {
    props: {},
  }
}
