import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src="/gambar/logo.png" 
        alt="FTK Logo" 
        width={40} 
        height={40}
        style={{ borderRadius: '4px' }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
        FOR THE KINGDOM
      </span>
    </div>
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
