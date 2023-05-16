import { useCodeView } from '@/hooks/useCodeView'
import Link from 'next/link'

export const Header = () => {
  const { codeView, toggleCodeView } = useCodeView()
  return (
    <div className="bg-white w-full flex justify-center h-12 border-b border-gray-300">
      <div className="w-80">
        <Link href="/">
          <div className="h-full flex justify-between items-center">
            <button className="p-1 rounded-xl hover:bg-gray-300">
              <HomeIcon />
            </button>
            <button
              className={
                'rounded-xl p-1 hover:bg-gray-300' +
                (codeView ? ' bg-gray-300' : '')
              }
              onClick={toggleCodeView}
            >
              <CodeIcon />
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-8 h-8 fill-gray-700"
    >
      <path
        fill-rule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

const CodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      className="w-8 h-8 stroke-gray-700"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  )
}
