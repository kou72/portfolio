interface SimpleButtonProps {
  children: React.ReactNode
}

export const SimpleButton = ({ children }: SimpleButtonProps) => {
  return (
    <button className="border border-gray-300 rounded-3xl py-4 text-xl hover:bg-gray-100 transition-colors duration-500">
      {children}
    </button>
  )
}
