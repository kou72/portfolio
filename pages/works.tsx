import fs from 'fs'
import { Header } from '@/components/Header'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'

export default function Works(props: any) {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Header />
      {props.slugs.map((slug: any, index: any) => {
        return <div key={index}>{slug}</div>
      })}
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Works
        </div>
        <div className="flex flex-col gap-4 w-80">
          <div className="bg-white w-full rounded-3xl p-4">
            <ReactMarkdown className="markdown-body">{text}</ReactMarkdown>
          </div>
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

  return {
    props: {
      slugs: getAllSlug(),
    },
  }
}

const text = `
## ネットワーク構築業務
2018/4 ~ 2023/3

新卒入社後、ネットワーク構築をメインに従事。ネットワーク設計～構築～実導入まで対応。またフロント対応も実施。

\`Cisco\` (\`Catalyst\` \`Nexus\` \`ISR\` \`Aironet\`) \`Fortinet\`(\`FortiGate\` \`FortiManager\` \`FortiAnalyzer\`) \`Aruba AP\` \`Palo Alto PA-X\` \`F5 BIG-IP\`

`
