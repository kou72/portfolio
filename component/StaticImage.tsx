import React from 'react'
const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? '/portfolio' : ''

function withPrefix(path: string) {
  return `${prefixPath}${path}`
}

interface StaticImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function StaticImage({ src, alt, ...props }: StaticImageProps) {
  return <img src={withPrefix(src)} alt={alt} {...props} />
}
