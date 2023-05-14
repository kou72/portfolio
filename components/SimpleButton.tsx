interface SimpleButtonProps {
  children: React.ReactNode
}

export const SimpleButton = ({ children }: SimpleButtonProps) => {
  return (
    <button className="bg-white w-full mx-2 border border-gray-300 rounded-3xl py-4 text-xl hover:bg-gray-200 transition-colors duration-500">
      {children}
    </button>
  )
}
