import Image from 'next/image'

export const User = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/avatar.jpg"
        alt="Imagem de perfil"
        width={24}
        height={24}
        style={{ borderRadius: '24px' }}
      />
      <span className="text-xs sm:text-sm text-gray-900 font-semibold">
        João Vitor
      </span>
    </div>
  )
}
