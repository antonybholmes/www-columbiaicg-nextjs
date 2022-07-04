import cn from "../../lib/class-names"
import { IMAGEKIT_URL } from "../../constants"
import IFieldMap from "../../types/field-map"

// const imageKitLoader = (src: string, width: number, quality: number) => {
//   if (src[0] === '/') {
//     src = src.slice(1)
//   }

//   const params = [`w-${width}`]

//   if (quality) {
//     params.push(`q-${quality}`)
//   }

//   const paramsString = params.join(',')

//   return `${IMAGEKIT_URL}/${src}?tr=${paramsString}`
// }

// const imageKitLoader640 = ({ src, width, quality }: ImageLoaderProps) => {
//   return imageKitLoader(src, 640, quality)
// }

interface IProps {
  src: string
  alt: string
  size?: [number, number]
  sizes?: number[]
  root?: string
  className?: string
  style?: IFieldMap
  onMouseEnter?: any
  onMouseLeave?: any
}

const BaseImage = ({
  src,
  alt,
  size = [640, 360],
  sizes = [320, 480, 640, 1280],
  className,
  style,
  onMouseEnter,
  onMouseLeave,
}: IProps) => {
  const handleMouseEnter = (e: any) => {
    if (onMouseEnter) {
      onMouseEnter(e)
    }
  }

  const handleMouseLeave = (e: any) => {
    if (onMouseLeave) {
      onMouseLeave(e)
    }
  }

  src = `${IMAGEKIT_URL}/${src}`

  // add default ext if none present
  if (!src.match(/\.\w+$/)) {
    src = `${src}.webp`
  }

  const srcset = sizes.map(size => `${src}?tr=w-${size} ${size}w`).join(", ")

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${src}?tr=w-${size[0]}`}
      srcSet={srcset}
      sizes={`(min-width: ${size[0]}px) ${size[0]}px, 100vw`}
      width={size[0]}
      height={size[1]}
      className={cn("absolute w-full h-full", className)}
      style={style}
      decoding="async"
      loading="lazy"
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
    // <Image
    //   layout='responsive'
    //   loader={imageKitLoader640}
    //   src={`${root}/${src}.webp`}
    //   alt={alt}
    //   width={size[0]}
    //   height={size[1]}
    //   className={cn('overflow-hidden', className)}
    // />
    // <img
    //   src={`${root}/${src}-${size[0]}w.webp`}
    //   srcSet={srcset}
    //   sizes={`(min-width: ${size[0]}px) ${size[0]}px, 100vw`}
    //   width={size[0]}
    //   height={size[1]}
    //   className={cn('overflow-hidden', className)}
    //   alt={alt}
    //   loading="lazy"
    //   decoding="async"
    // />
  )
}

export default BaseImage
