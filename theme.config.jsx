import React from 'react'
const config = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – For The Kingdom Guide'
    }
  },
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img 
        src="/gambar/logo.png" 
        alt="For The Kingdom Logo" 
        width={32} 
        height={32}
        style={{ borderRadius: '4px' }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
        For The Kingdom Guide
      </span>
    </div>
  ),
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  project: {
    link: 'https://github.com/AzuraTen4',
  },
  chat: {
    link: 'https://discord.gg/QB9xDPKXwT',
  },
footer: {
  component: (
    <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #333' }}>
      Made With Love ❤️ © AzuraTen4 2026
    </footer>
  )
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  docsRepositoryBase: 'https://github.com/AzuraTen4/accumulation-starter-kit/blob/main',
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false,
    autoCollapse: true
  },
  search: {
  placeholder: 'Search Guide.....'
},
banner: {
  key: 'ftk-banner',
  content: (
    <span style={{ background: '#5865F2', padding: '4px 12px', borderRadius: '4px' }}>
      🎮 For The Kingdom is now in Testnet! Join → {' '}
      <a href="https://discord.gg/QB9xDPKXwT" target="_blank" style={{ textDecoration: 'underline', color: 'white' }}>
        FTK Discord
      </a>
      {' '} 
    </span>
  ),
}
}
export default config
