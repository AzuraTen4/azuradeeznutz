import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Logo dari public folder */}
      <img 
        src="/gambar/logo.png" 
        alt="For The Kingdom Logo" 
        width={32} 
        height={32}
      />
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
        For The Kingdom Guide
      </span>
    </div>
  ),
head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
  project: {
    link: 'https://github.com/AzuraTen4',
  },
  chat: {
    link: 'https://discord.gg/QB9xDPKXwT',
  },
  footer: {
    text: 'Made With Love',
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
}

export default config 

