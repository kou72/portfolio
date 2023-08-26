import { GetStaticProps } from 'next'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { Header } from '@/components/Header'

interface PropsType {
  ogTitleContent: string
  ogDescriptionContent: string
  ogImageContent: string
}

export default function Products(props: PropsType) {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Products
        </div>
        <p>{props.ogTitleContent}</p>
        <p>{props.ogDescriptionContent}</p>
        <img src={props.ogImageContent} alt="" />
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
  const ogDescriptionContent = dom.window.document
    .querySelector('meta[property="og:description"]')
    ?.getAttribute('content')
  const ogImageContent = dom.window.document
    .querySelector('meta[property="og:image"]')
    ?.getAttribute('content')

  return {
    props: {
      ogTitleContent: ogTitleContent,
      ogDescriptionContent: ogDescriptionContent,
      ogImageContent: ogImageContent,
    },
  }
}
