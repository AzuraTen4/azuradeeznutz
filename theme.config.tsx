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
  logo: <span>For The Kingdom Guide</span>,
  project: {
    link: 'https://github.com/AzuraTen4',
  },
  chat: {
    link: 'https://discord.gg/QB9xDPKXwT',
  },
  footer: {
    text: 'Made With Love', // ← KOSONGIN ATAU GANTI DENGAN TEXT KAMU
  },
  // TAMBAHIN INI UNTUK NONAKTIFKAN FEEDBACK
  feedback: {
    content: null, // ← NONAKTIFKAN FEEDBACK
  },
  editLink: {
    component: null, // ← NONAKTIFKAN EDIT LINK JIKA PERLU
  },
}

export default config
