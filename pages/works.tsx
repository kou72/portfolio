import fs from 'fs'
import { Header } from '@/components/Header'
import { GetStaticProps } from 'next'
import { WorkCard } from '@/components/WorkCard'
import { CodeBlock } from '@/components/CodeBloc'

interface PropsType {
  markdowns: string[]
  workCardPath: string
  workCardCode: string
}

export default function Works(props: PropsType) {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Works
        </div>
        {props.markdowns.map((markdown, index) => (
          <div className="flex flex-col gap-4 w-80 mb-6" key={index}>
            <WorkCard markdown={markdown} />
            {/* コンポーネントをcode形式で表示、最初の一つだけ */}
            {index === 0 && (
              <CodeBlock path={props.workCardPath} code={props.workCardCode} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// WorkCardで表示するmarkdownを取得
// CodeBlockで表示するコンポーネントのパスとコードを取得
export const getStaticProps: GetStaticProps = () => {
  const getMarkdownFiles = () => {
    const files = fs.readdirSync('contents/works')
    const markdowns = files.map((file) =>
      fs.readFileSync(`contents/works/${file}`, 'utf8')
    )
    return markdowns
  }
  const workCardPath = 'components/WorkCard.tsx'
  const workCardCode = fs.readFileSync(workCardPath, 'utf8')

  return {
    props: {
      markdowns: getMarkdownFiles(),
      workCardPath: workCardPath,
      workCardCode: workCardCode,
    },
  }
}
