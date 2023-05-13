import StaticImage from '@/component/StaticImage'

export default function Home() {
  return (
    <>
      <div className=" w-full h-12 border-b border-gray-300"></div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 w-80">
          <div className="flex justify-center text-6xl font-mono font-extrabold text-gray-700 p-12">
            Kou S
          </div>
          <button className="border border-gray-300 rounded-3xl py-4 text-xl hover:bg-gray-100 transition-colors duration-500">
            業務・活動の履歴
          </button>
          <button className="border border-gray-300 rounded-3xl py-4 text-xl hover:bg-gray-100 transition-colors duration-500">
            作ったサービス・教材
          </button>
          <div className="flex justify-evenly">
            <button className="flex items-center justify-center border border-gray-300 rounded-3xl w-16 h-16 hover:bg-gray-100 transition-colors duration-500">
              <StaticImage
                src={'/github-logo.svg'}
                alt={'github'}
                width={32}
                height={32}
              ></StaticImage>
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded-3xl p-4 hover:bg-gray-100 transition-colors duration-500">
              <StaticImage
                src={'/zenn-logo.svg'}
                alt={'zenn'}
                width={32}
                height={32}
              ></StaticImage>
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded-3xl p-4 hover:bg-gray-100 transition-colors duration-500">
              <StaticImage
                src={'/twitter-logo.svg'}
                alt={'twitter'}
                width={32}
                height={32}
              ></StaticImage>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
