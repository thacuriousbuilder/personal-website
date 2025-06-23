import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  external?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
}

export default function Button({
  children,
  href,
  external = false,
  variant = 'secondary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md gap-2'
  
  const variants = {
    primary: 'bg-[#008080] text-white hover:bg-[#006666]',
    secondary: 'border border-gray-300 bg-white text-[#2b2b2b] hover:border-[#008080] hover:text-[#008080]',
    ghost: 'text-[#2b2b2b] hover:text-[#008080] hover:bg-gray-50'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  const content = (
    <>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </>
  )
  
  if (href) {
    if (external) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  )
}