export default function Home() {
  return (
    <>
      <div className=" w-full h-12 border-b border-gray-300"></div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 w-80">
          <div className="flex justify-center text-6xl font-mono font-extrabold text-gray-700 p-12">
            Kou S
          </div>
          <button className="border border-gray-300 rounded-3xl px-24 py-4 text-xl hover:bg-gray-100 transition-colors duration-500">
            業務経歴
          </button>
          <button className="border border-gray-300 rounded-3xl px-24 py-4 text-xl hover:bg-gray-100 transition-colors duration-500">
            作ったサービス
          </button>
          <button className="border border-gray-300 rounded-3xl px-24 py-4 text-xl hover:bg-gray-100 transition-colors duration-500">
            Zenn
          </button>
        </div>
      </div>
    </>
  )
}
