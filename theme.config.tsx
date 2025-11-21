import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>For The Kingdom Guide</span>,
  project: {
    link: 'https://github.com/AzuraTen4/documentation-starter-kit',
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
