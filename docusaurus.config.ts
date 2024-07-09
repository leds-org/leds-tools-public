import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentação LEDS Tools',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LEDSIFES', // Usually your GitHub org/user name.
  projectName: 'Docs-LEDS-Tools', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    require.resolve('docusaurus-lunr-search'),    
  ],


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      }
    },
    image: 'img/leds-social-card.jpg',
    navbar: {
      title: 'LEDS Tools',
      logo: {
        alt: 'LEDS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'codeto',
          position: 'left',
          label: 'CODETO',
        },
        {
          type: 'docSidebar',
          sidebarId: 'andes',
          position: 'left',
          label: 'ANDES',
        },
        {
          type: 'docSidebar',
          sidebarId: 'made',
          position: 'left',
          label: 'MADE',
        },
        {
          href: 'https://gitlab.com/ledsifes',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
