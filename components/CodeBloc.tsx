import { useCodeView } from '@/hooks/useCodeView'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  path: string
  code: string
}

export const CodeBlock = ({ path, code }: CodeBlockProps) => {
  const { codeView } = useCodeView()
  if (!codeView) return null
  return (
    <div className="bg-[#282c34] rounded-xl pt-2">
      <span className="text-white text-sm ml-2 px-2 pt-0.5 pb-1 bg-gray-600 rounded">
        {path}
      </span>
      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        wrapLongLines
        className="text-sm"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
