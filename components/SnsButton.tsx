import StaticImage from './StaticImage'

interface SnsButtonProps {
  src: string
  alt: string
}

export const SnsButton = ({ src, alt }: SnsButtonProps) => {
  return (
    <button className="bg-white flex items-center justify-center rounded-3xl w-16 h-16 hover:bg-gray-200 transition-colors duration-500">
      <StaticImage src={src} alt={alt} width={32} height={32}></StaticImage>
    </button>
  )
}
