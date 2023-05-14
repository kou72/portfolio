import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Works
        </div>
      </div>
    </div>
  )
}
