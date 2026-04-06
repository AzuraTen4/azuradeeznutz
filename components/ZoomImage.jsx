import React from 'react'
import dynamic from 'next/dynamic'
import 'react-medium-image-zoom/dist/styles.css'

// Mengimpor library zoom hanya di sisi klien (browser)
const Zoom = dynamic(() => import('react-medium-image-zoom'), { ssr: false })

const ZoomImage = ({ src, alt, ...props }) => {
  return (
    <Zoom>
      {/* Gunakan tag img standar agar kompatibel dengan library zoom */}
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
