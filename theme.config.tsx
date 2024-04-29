import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
  // banner: {
  //   key: '1.0-release',
  //   text: (
  //     <a href='https://formail.dev' target='_blank'>
  //       🎉 Formail 1.0 is released. Read more →
  //     </a>
  //   ),
  // },
  logo: <span>Formail</span>,
  project: {
    link: 'https://github.com/seangray-dev/formail-app',
  },
  docsRepositoryBase: 'https://github.com/seangray-dev/formail-docs',
  darkMode: false,
  primaryHue: 0,
  primarySaturation: 0,
  toc: {
    component: null,
  },
  navigation: false,
  footer: {
    component: null,
  },
};

export default config;
