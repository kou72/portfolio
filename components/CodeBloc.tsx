import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  code: string
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={oneDark}>
      {code}
    </SyntaxHighlighter>
  )
}
