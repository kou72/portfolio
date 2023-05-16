import fs from 'fs'
import { Header } from '@/components/Header'
import { SimpleButton } from '../components/SimpleButton'
import { SnsButton } from '../components/SnsButton'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { GetStaticProps } from 'next'

export default function Home(props: any) {
  console.log(props.simpleButtonCode)

  return (
    <div className="bg-blue-100 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-6xl font-mono font-extrabold text-gray-700 py-12 w-full">
          Kou S
        </div>
        <div className="flex flex-col justify-center gap-4 w-80">
          <SimpleButton text={'業務・活動の履歴'} href={'/works'} />
          <SimpleButton text={'作ったサービス・教材'} href={'/products'} />
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {props.simpleButtonCode}
          </SyntaxHighlighter>
          <div className="flex justify-evenly">
            <SnsButton src={'/github-logo.svg'} alt={'github'} />
            <SnsButton src={'/zenn-logo.svg'} alt={'zenn'} />
            <SnsButton src={'/twitter-logo.svg'} alt={'twitter'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const simpleButtonCode = fs.readFileSync(
    'components/SimpleButton.tsx',
    'utf8'
  )
  return {
    props: {
      simpleButtonCode: simpleButtonCode,
    },
  }
}
