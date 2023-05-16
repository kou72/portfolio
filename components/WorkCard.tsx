import ReactMarkdown from 'react-markdown'

interface WorkCardProps {
  markdown: string
}

export const WorkCard = ({ markdown }: WorkCardProps) => {
  return (
    <div className="bg-white w-full rounded-3xl p-4">
      <ReactMarkdown className="markdown-body">{markdown}</ReactMarkdown>
    </div>
  )
}
