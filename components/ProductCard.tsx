interface ProdeuctCardProps {
  url: string
  tech: string[]
  ogTitle: string
  ogDescription: string
  ogImage: string
}

export const ProductCard = ({
  url,
  tech,
  ogTitle,
  ogDescription,
  ogImage,
}: ProdeuctCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-white w-full rounded-3xl pb-4 hover:opacity-80 transition-opacity duration-200"
    >
      <img src={ogImage} alt={ogTitle} className="mb-2 rounded-t-3xl w-full" />
      <p className="text-2xl font-bold text-gray-700 mx-4">{ogTitle}</p>
      <p className="mx-4 mb-1">{ogDescription}</p>
      <div className="mx-3">
        {tech.map((item, index) => (
          <span
            className="mr-2 px-2 py-0.5 text-sm bg-gray-200 rounded-lg"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </a>
  )
}
