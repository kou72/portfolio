interface ProdeuctCardProps {
  ogTitle: string
  ogDescription: string
  ogImage: string
}

export const ProductCard = ({
  ogTitle,
  ogDescription,
  ogImage,
}: ProdeuctCardProps) => {
  return (
    <a
      href="https://meet-time.skapp.dev/"
      target="_blank"
      className="flex flex-col gap-2 bg-white w-full rounded-3xl pb-4 hover:bg-gray-200 transition-colors duration-200"
    >
      <img src={ogImage} alt={ogTitle} className="rounded-t-3xl w-full" />
      <p className="text-2xl font-bold text-gray-700 mx-4">{ogTitle}</p>
      <p className="mx-4">{ogDescription}</p>
    </a>
  )
}
