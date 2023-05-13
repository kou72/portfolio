import StaticImage from './StaticImage'

interface SnsButtonProps {
  src: string
  alt: string
}

export const SnsButton = ({ src, alt }: SnsButtonProps) => {
  return (
    <button className="flex items-center justify-center border border-gray-300 rounded-3xl w-16 h-16 hover:bg-gray-100 transition-colors duration-500">
      <StaticImage src={src} alt={alt} width={32} height={32}></StaticImage>
    </button>
  )
}
