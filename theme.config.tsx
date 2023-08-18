import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>EndGame</span>,
  project: {
    link: 'https://github.com/endgameinitiative/k2/tree/main',
  },
  docsRepositoryBase: 'https://github.com/endgameinitiative/k2/tree/main',
  footer: {
    text: 'Endgame',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Endgame'
    }
  }
}

export default config
