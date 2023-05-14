import { SimpleButton } from '../components/SimpleButton'

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="bg-white w-full h-12 border-b border-gray-300"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-mono font-extrabold text-gray-700 py-12 w-full">
          業務・活動の履歴
        </div>
        <div className="flex flex-col justify-center gap-4 w-80">
          <SimpleButton text={'業務・活動の履歴'} href={'/works'} />
        </div>
      </div>
    </div>
  )
}
