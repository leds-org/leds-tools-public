import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LEDS DevTools',
  favicon: 'img/favicon.ico',
  url: `https://leds-org.github.io`,
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'leds-org', // Usually your GitHub org/user name.
  projectName: 'leds-tools', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'], // Example locales
  },
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
          breadcrumbs: true,          
          showLastUpdateTime: false, 
          includeCurrentVersion:true,   
          docsRootComponent: '@theme/DocsRoot',
          docVersionRootComponent: '@theme/DocVersionRoot',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/DocItem',  
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    footer: {

      style: 'light',      
    copyright: `
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="/img/leds.png" alt="Powered by LEDS" style="height: 24px; margin-right: 8px;" />
      <span>Copyright © ${new Date().getFullYear()}. Powered by <a href="https://www.instagram.com/ledsifes/">LEDS</a>, created with Docusaurus.</span>
    </div>
  `,

    },
    
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    image: 'img/leds-social-card.jpg',
    navbar: {
      title: 'TOOLS ',
      logo: {
        alt: 'LEDS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'andes',
          position: 'left',
          label: 'Andes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'code_wise',
          position: 'left',
          label: 'Code Wise',
        },
        {
          type: 'docSidebar',
          sidebarId: 'made',
          position: 'left',
          label: 'Made',
        },
        {
          type: 'docSidebar',
          sidebarId: 'spark',
          position: 'left',
          label: 'Spark',
        },
        {
          type: 'docSidebar',
          sidebarId: 'test_ai',
          position: 'left',
          label: 'Test.AI',
        },
        {
          type: 'docSidebar',
          sidebarId: 'oraculo',
          position: 'left',
          label: 'Oraculo',
        },
        {
          href: 'https://github.com/leds-org',
          label: 'GitHub',
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
