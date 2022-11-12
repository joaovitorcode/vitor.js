interface DividerProps {
  children: string
}

export const Divider = ({ children }: DividerProps) => {
  return (
    <div className="w-full flex items-center">
      <div className="flex-1 border-t border-gray-200 dark:border-gray-700" />
      <div className="px-6 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
        {children}
      </div>
      <div className="flex-1 border-t border-gray-200 dark:border-gray-700" />
    </div>
  )
}
