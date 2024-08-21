import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KnowLeds: The Source of LED Knowledge',
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
        hideable: false,
        autoCollapseCategories: true,
      }
    },
    image: 'img/leds-social-card.jpg',
    navbar: {
      title: 'KnowLEDS ',
      logo: {
        alt: 'LEDS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'inspirations',
          position: 'left',
          label: 'Inspirations',
        },
        {
          type: 'docSidebar',
          sidebarId: 'concepts',
          position: 'left',
          label: 'Concepts',
        },          
        {
          type: 'docSidebar',
          sidebarId: 'processos',
          position: 'left',
          label: 'Processes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectdecisions',
          position: 'left',
          label: 'Project Decisions',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tools',
          position: 'left',
          label: 'Tools',
        },
        {
          type: 'docSidebar',
          sidebarId: 'bestpractices',
          position: 'left',
          label: 'Best Practices',
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
