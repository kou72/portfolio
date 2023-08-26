import StaticImage from './StaticImage'

interface SnsButtonProps {
  src: string
  alt: string
  href: string
}

export const SnsButton = ({ src, alt, href }: SnsButtonProps) => {
  return (
    <a href={href} target="_blank">
      <button className="flex items-center justify-center rounded-3xl w-16 h-16 hover:bg-gray-200 transition-colors duration-200">
        <StaticImage src={src} alt={alt} width={32} height={32}></StaticImage>
      </button>
    </a>
  )
}
