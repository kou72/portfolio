import Link from 'next/link'

interface SimpleButtonProps {
  text: string
  href: string
}

export const SimpleButton = ({ text, href }: SimpleButtonProps) => {
  return (
    <Link href={href}>
      <button className="bg-white w-full border border-gray-300 rounded-3xl py-4 text-xl hover:bg-gray-200 transition-colors duration-200">
        {text}
      </button>
    </Link>
  )
}
