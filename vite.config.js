import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    // Head tags are injected at the top of <head>; keep <meta charset> first, as browsers expect
    onPageRendered: (route, html) => {
      const charset = '<meta charset="UTF-8">'
      return html.replace(charset, '').replace('<head>', '<head>' + charset)
    },
  },
})
