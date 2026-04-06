import React from 'react'
import dynamic from 'next/dynamic'

// import zoom hanya di client
const Zoom = dynamic(() => import('react-medium-image-zoom'), { ssr: false })

const ZoomImage = ({ src, alt, ...props }) => {
  // kalau belum di client → render img biasa
  if (typeof window === 'undefined') {
    return (
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        {...props}
      />
    )
  }

  return (
    <Zoom>
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        {...props}
      />
    </Zoom>
  )
}

export default ZoomImage
