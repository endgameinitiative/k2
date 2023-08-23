import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>K2 EndGame</span>,
  project: {
    link: 'https://github.com/endgameinitiative/k2/tree/main',
  },
  docsRepositoryBase: 'https://github.com/endgameinitiative/k2/tree/main',
  footer: {
    text: 'K2-Endgame',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Endgame'
    }
  }
}

export default config
