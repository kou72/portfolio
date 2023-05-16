import fs from 'fs'
import { Header } from '@/components/Header'
import { SimpleButton } from '../components/SimpleButton'
import { SnsButton } from '../components/SnsButton'
import { CodeBlock } from '@/components/CodeBloc'
import { GetStaticProps } from 'next'

interface PropsType {
  simpleButtonCode: string
}

export default function Home(props: PropsType) {
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
          <CodeBlock code={props.simpleButtonCode} />
          <div className="flex justify-evenly mb-4">
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
