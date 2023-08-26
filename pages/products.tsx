import { Header } from '@/components/Header'

export default function Products() {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-4xl font-extrabold text-gray-700 py-12 w-full">
          Products
        </div>
      </div>
    </div>
  )
}
