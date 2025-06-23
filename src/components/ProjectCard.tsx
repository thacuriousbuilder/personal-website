import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  href: string
  title: string
  date?: string
  description?: string
  variant?: 'cover2cover' | 'cybersecurity' | 'indie'
  category?: 'SIEM' | 'Threat Hunting' | 'Tools' | 'Research' | 'Writeups' | 'Productivity' | 'Security' | 'Social' | 'Utility' | 'Experimental'
  placeholder?: 'square' | 'circle' | 'triangle' | 'none'
  image?: string
  imageAlt?: string
  comingSoon?: boolean
  isHighlighted?: boolean
  coverImage?: string
  logo?: string
  logoAlt?: string
  customBgColor?: string
}

export default function ProjectCard({ 
  href, 
  title,
  date,
  description,
  variant = 'cybersecurity',
  category,
  placeholder = 'none',
  image,
  imageAlt,
  comingSoon = false,
  isHighlighted = false,
  coverImage,
  logo,
  logoAlt,
  customBgColor
}: ProjectCardProps) {
  // Different aspect ratios for each variant
  const aspectRatios = {
    cover2cover: 'aspect-[3/4]', // Book cover proportions
    cybersecurity: 'aspect-square',
    indie: 'aspect-[9/16]' // Phone proportions
  }

  const placeholderShapes = {
    square: <div className="w-12 h-12 bg-black"></div>,
    circle: <div className="w-12 h-12 bg-black rounded-full"></div>,
    triangle: <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-black"></div>,
    none: null
  }

  const cardContent = (
    <>
      <div className={`
        ${variant === 'indie' && customBgColor ? `bg-[${customBgColor}]` :
          variant === 'cybersecurity' ? 'bg-white border-4 border-black' :
          variant === 'cover2cover' ? 'bg-gradient-to-br from-gray-100 to-gray-200' : 
          variant === 'indie' ? 'bg-gray-800' : 'bg-gray-100'} 
        ${aspectRatios[variant]} rounded-lg flex items-center justify-center 
        ${!comingSoon ? 'hover:shadow-xl' : ''} 
        ${isHighlighted ? 'border-2 border-blue-500' : ''}
        transition-all duration-300 overflow-hidden relative
        ${variant === 'cover2cover' ? 'transform hover:-translate-y-1' : 'transform hover:-translate-y-1'}
        ${variant === 'indie' ? 'rounded-3xl md:rounded-3xl rounded-2xl' : ''}
        ${category ? 'hover:brightness-105' : ''}
        ${variant === 'indie' ? 'shadow-lg border-4 border-black' : ''}
      `}>
        {image ? (
          <Image 
            src={image} 
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        ) : coverImage && variant !== 'indie' ? (
          <Image 
            src={coverImage} 
            alt={`${title} cover`}
            fill
            className="object-cover"
          />
        ) : logo ? (
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image 
              src={logo} 
              alt={logoAlt || `${title} logo`}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          placeholder !== 'none' && placeholderShapes[placeholder]
        )}
        
        {/* Phone screen effect for indie apps */}
        {variant === 'indie' && !coverImage && !logo && (
          <div className="absolute inset-2 bg-gray-100 rounded-2xl flex items-center justify-center">
            {placeholder !== 'none' && placeholderShapes[placeholder]}
          </div>
        )}

        {/* Splash screen for indie apps with cover image */}
        {variant === 'indie' && coverImage && (
          <div className="absolute inset-2 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="relative w-36 h-36 md:w-40 md:h-40">
              <Image 
                src={coverImage} 
                alt={`${title} splash`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Upcoming badge for books */}
        {variant === 'cover2cover' && comingSoon && (
          <div className="absolute top-2 right-2 bg-[#008080] text-white text-xs font-medium px-2 py-1 rounded-full">
            Upcoming
          </div>
        )}

        {/* Mobile phone details for indie apps */}
        {variant === 'indie' && (
          <>
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-400 rounded-full opacity-60"></div>
            {/* Camera notch (mobile) */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-400 rounded-full opacity-60 md:hidden"></div>
            {/* Camera notch (tablet/desktop) */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gray-400 rounded-full opacity-60 hidden md:block"></div>
          </>
        )}
      </div>
      
      {/* Title and description styling based on variant */}
      {variant === 'indie' ? (
        <div>
          <p className="mt-2 text-sm text-center text-gray-500">App</p>
          <p className={`text-center font-medium ${comingSoon ? 'text-gray-400' : ''}`}>
            {title}
          </p>
        </div>
      ) : variant === 'cybersecurity' ? (
        <div className="mt-3">
          <h3 className="font-semibold text-base mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      ) : (
        // cover2cover variant - book-like styling
        <div className="mt-4 space-y-2">
          <h3 className={`font-bold text-lg leading-tight ${comingSoon ? 'text-gray-400' : 'text-[#2b2b2b]'}`}>
            {title}
          </h3>
          {date && (
            <time className="text-sm text-gray-500 font-medium">{date}</time>
          )}
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>
      )}
    </>
  )

  if (comingSoon) {
    return <div className="block">{cardContent}</div>
  }

  return (
    <Link href={href} className="block group">
      {cardContent}
    </Link>
  )
}