interface TagProps {
  children: string
}

export const Tag = ({ children }: TagProps) => {
  return (
    <div className="flex items-center px-2 text-xs uppercase font-semibold text-green-900 bg-green-50 rounded-full">
      {children}
    </div>
  )
}
