import fs from 'fs'
import { Header } from '@/components/Header'
import { SimpleButton } from '@/components/SimpleButton'
import { SnsButton } from '@/components/SnsButton'
import { CodeBlock } from '@/components/CodeBloc'
import { GetStaticProps } from 'next'

interface PropsType {
  simpleButtonPath: string
  simpleButtonCode: string
  snsButtonPath: string
  snsButtonCode: string
}

export default function Home(props: PropsType) {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-6xl font-mono font-extrabold text-gray-700 py-12 w-full">
          Kou S
        </div>
        <div className="flex flex-col justify-center gap-4 w-80 m-4">
          <SimpleButton text={'業務・活動の履歴'} href={'/works'} />
          <CodeBlock
            path={props.simpleButtonPath}
            code={props.simpleButtonCode}
          />
          <SimpleButton text={'作ったサービス・教材'} href={'/products'} />
          <div className="flex justify-evenly">
            <SnsButton src={'/github-logo.svg'} alt={'github'} />
            <SnsButton src={'/zenn-logo.svg'} alt={'zenn'} />
            <SnsButton src={'/x-logo.svg'} alt={'x'} />
          </div>
          <CodeBlock path={props.snsButtonPath} code={props.snsButtonCode} />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const simpleButtonPath = 'components/SimpleButton.tsx'
  const simpleButtonCode = fs.readFileSync(simpleButtonPath, 'utf8')
  const snsButtonPath = 'components/SnsButton.tsx'
  const snsButtonCode = fs.readFileSync(snsButtonPath, 'utf8')
  return {
    props: {
      simpleButtonPath: simpleButtonPath,
      simpleButtonCode: simpleButtonCode,
      snsButtonPath: snsButtonPath,
      snsButtonCode: snsButtonCode,
    },
  }
}
