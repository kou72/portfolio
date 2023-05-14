import { SimpleButton } from '../components/SimpleButton'
import { SnsButton } from '../components/SnsButton'

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="bg-white w-full h-12 border-b border-gray-300"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-6xl font-mono font-extrabold text-gray-700 py-12 w-full">
          Kou S
        </div>
        <div className="flex flex-col justify-center gap-4 w-80">
          <SimpleButton>業務・活動の履歴</SimpleButton>
          <SimpleButton>作ったサービス・教材</SimpleButton>
          <div className="flex justify-evenly">
            <SnsButton src={'/github-logo.svg'} alt={'github'}></SnsButton>
            <SnsButton src={'/zenn-logo.svg'} alt={'zenn'}></SnsButton>
            <SnsButton src={'/twitter-logo.svg'} alt={'twitter'}></SnsButton>
          </div>
        </div>
      </div>
    </div>
  )
}
