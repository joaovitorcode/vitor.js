interface TagProps {
  children: string
}

export const Tag = ({ children }: TagProps) => {
  return (
    <div className="flex items-center py-1 px-2 text-xs uppercase font-semibold text-green-900 dark:text-white bg-green-50 dark:bg-gray-700 rounded-full">
      {children}
    </div>
  )
}
