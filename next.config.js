import nextra from 'nextra'

const withNextra = nextra({
  // Config baru untuk Nextra v4
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
  // Hapus properti lama
})

export default withNextra()
