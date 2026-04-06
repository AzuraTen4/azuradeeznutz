import Image from 'next/image'

export function useMDXComponents(components) {
  return {
    img: ({ src, alt, ...props }) => {
      // kalau GIF → pakai <img> biasa
      if (src.endsWith('.gif')) {
        return <img src={src} alt={alt || ''} style={{ width: '100%' }} />
      }

      // selain GIF → pakai next/image
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      )
    },
    ...components,
  }
        }
