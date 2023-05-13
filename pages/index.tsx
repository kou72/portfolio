import { SimpleButton } from '@/component/SimpleButton'
import { SnsButton } from '@/component/SnsButton'

export default function Home() {
  return (
    <>
      <div className=" w-full h-12 border-b border-gray-300"></div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 w-80">
          <div className="flex justify-center text-6xl font-mono font-extrabold text-gray-700 p-12">
            Kou S
          </div>
          <SimpleButton>業務・活動の履歴</SimpleButton>
          <SimpleButton>作ったサービス・教材</SimpleButton>
          <div className="flex justify-evenly">
            <SnsButton src={'/github-logo.svg'} alt={'github'}></SnsButton>
            <SnsButton src={'/zenn-logo.svg'} alt={'zenn'}></SnsButton>
            <SnsButton src={'/twitter-logo.svg'} alt={'twitter'}></SnsButton>
          </div>
        </div>
      </div>
    </>
  )
}
