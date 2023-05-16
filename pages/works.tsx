import fs from 'fs'
import { Header } from '@/components/Header'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'

export default function Works(props: any) {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Works
        </div>
        <div className="flex flex-col gap-4 w-80">
          {props.markdowns.map((markdown: any, index: any) => {
            return (
              <div className="bg-white w-full rounded-3xl p-4" key={index}>
                <ReactMarkdown className="markdown-body">
                  {markdown}
                </ReactMarkdown>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const getAllSlug = () => {
    return fs.readdirSync('contents/works').map((fileName) => {
      return fileName.replace(/\.md$/, '')
    })
  }

  const getMarkdown = (filePath: string) => {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return fileContents
  }

  const getMarkdownFiles = () => {
    const slugs = getAllSlug()
    const markdowns = slugs.map((slug) =>
      getMarkdown(`contents/works/${slug}.md`)
    )
    return markdowns
  }

  return {
    props: {
      markdowns: getMarkdownFiles(),
    },
  }
}
