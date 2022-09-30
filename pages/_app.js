import React from 'react';
import Head from 'next/head';
import Script from 'next/script'

import { AppLink as Link } from '../components/AppLink';
import { Footer, TableOfContents, TopNav } from '../components/Shell';

import '@docsearch/css';
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-matlab';
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight';
import 'prismjs/components/prism-diff';
import 'codemirror/lib/codemirror.css';

import '../public/globals.css';

const TITLE = 'Mohammad Faisal';
const DESCRIPTION = 'Blog';
const FAISALBLOG = `


  Why are you here? This is only for Faisal!



`;

const FONTS_BASE_URL = process.env.NEXT_PUBLIC_FONTS_BASE_URL || '/fonts';

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export default function MyApp(props) {
  const [theme, setTheme] = React.useState(undefined);

  const { Component, pageProps } = props;
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  const isLandingPage = props.router.pathname === '/';

  React.useEffect(() => console.log(FAISALBLOG), []);

  return (
    <div>
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-85038544-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-85038544-1');
          `}
        </Script>

        <title>{`${TITLE} | ${title}`}</title>
        <link
          rel="shortcut icon"
          href="/images/favicon.jpg"
        />
        <link
          rel="icon"
          href="/images/favicon.jpg"
        />
        <link
          rel="preconnect"
          href={`https://${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}-dsn.algolia.net`}
          crossOrigin
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://faisalhmohd.github.io/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://faisalhmohd.github.io/images/social.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://faisalhmohd.github.io/images/social.png"
        />
      </Head>
      {/* https://webaim.org/techniques/skipnav/ */}
      <a href="#skip-nav" className="skip-nav">
        Skip to content
      </a>
      <TopNav theme={theme} setTheme={setTheme}>
        <Link href="/">Home</Link>
        <Link href="#" className="primary">
          Search
        </Link>
      </TopNav>
      <div className="page">
        <main className="flex column">
          <div id="skip-nav" />
          <Component {...pageProps} />
        </main>
        {!isLandingPage && <TableOfContents toc={toc} />}
      </div>
      <div className="footer-bar">
        <Footer landing={isLandingPage} theme={theme} setTheme={setTheme}>
          <Link href="https://www.linkedin.com/in/faisalhmohd/">Linkedin</Link>
          <Link href="https://twitter.com/faisalhmohd">Twitter</Link>
          <Link href="https://github.com/faisalhmohd">Github</Link>
          <Link href="http://steamcommunity.com/id/potetoed/">Steam</Link>
          <Link href="https://youtube.com/mohammadfaisalhere">Youtube</Link>
        </Footer>
      </div>
      <style jsx global>
        {`
          @font-face {
            font-family: 'Charter';
            font-style: normal;
            font-weight: normal;
            src: url('${FONTS_BASE_URL}/Charter-Regular.ttf');
          }

          @font-face {
            font-family: 'Charter';
            font-style: normal;
            font-weight: 500;
            src: url('${FONTS_BASE_URL}/Charter-Regular.ttf');
          }

          @font-face {
            font-family: 'Charter Bold';
            src: url('${FONTS_BASE_URL}/Charter-Bold.ttf');
          }

          .page {
            display: flex;
            flex-grow: 1;
            padding-top: var(--nav-height);
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
          }

          .dark .page {
            border-bottom-color: var(--black-light);
          }

          .skip-nav {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            position: absolute;
            text-decoration: none;
          }

          .skip-nav:focus {
            padding: 1rem;
            position: fixed;
            top: 10px;
            left: 10px;
            background: var(--light);
            z-index: 1000;
            width: auto;
            height: auto;
            clip: auto;
          }

          main {
            flex-grow: 1;
            max-width: 100%;
            /* https://stackoverflow.com/questions/36230944/prevent-flex-items-from-overflowing-a-container */
            min-width: 0;
          }

          main article {
            padding: 2rem 1.5rem 3rem;
          }

          .footer-bar {
            flex: 1;
            padding: 1rem 0;
            background: var(--gray-medium);
          }

          .footer-bar footer {
            margin: 0 auto;
            padding: 15px 50px;
            max-width: 1200px;
          }

          .dark .footer-bar {
            background: var(--black);
          }

          .page--landing .footer-bar .theme-toggle button.light {
            background: var(--white);
          }

          /* Landing page overrides */
          /* Move top border to first section */
          .page--landing .section hr {
            border: none;
            margin: 6.5rem 0;
            height: 2px;
            background-image: linear-gradient(
              to right,
              var(--dark) 33%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 6px 2px;
            background-repeat: repeat-x;
          }

          .page--landing .nav-bar nav {
            border-bottom: none;
          }
          .page--landing .hero {
            border-top: 1px solid var(--dark);
            margin: 0 auto;
            max-width: var(--landing-page-max-width);
          }

          .page--landing p {
            letter-spacing: 0.3px;
          }

          .page--landing .get-started p,
          .page--landing blockquote p,
          .page--landing table td p {
            font-size: var(--font-size-4);
            line-height: var(--line-height-4);
            font-weight: 400;
          }

          .page--landing blockquote {
            max-width: 520px;
          }

          /* Style hero section */
          .page--landing .hero {
            padding: 4rem 0 6rem;
          }

          .page--landing .get-started {
            background: var(--theme);
            padding: 115px 0 120px;
          }

          .page--landing .get-started .left ::selection {
            background: #ffe279 !important;
          }

          .page--landing .try {
            padding-top: 0;
            padding-bottom: 65px;
          }

          .page--landing .try span.cm-keyword,
          .page--landing .try span.cm-tag,
          .page--landing .try span.cm-string {
            color: inherit;
          }

          .page--landing .try span.cm-link,
          .page--landing .try span.cm-url {
            color: var(--purple);
          }

          .page--landing .value-props {
            padding-top: 0px;
          }

          .page--landing .by-stripe {
            padding-top: 110px;
          }

          .page--landing .sandbox {
            border-radius: 3px;
          }

          .page--landing .sandbox .preview p {
            letter-spacing: initial;
          }

          .dark .page--landing .get-started {
            background: var(--black-medium);
          }

          .page--landing .get-started section .primary {
            padding: 1rem 0 0;
          }

          .page--landing .get-started section .side-by-side .left {
            /* separate top and bottom on mobile */
            padding-bottom: 1rem;
          }

          .page--landing pre[class*='language-'] {
            border: none;
            background: var(--black) !important;
            padding: 25px;
          }

          /* Make "npm install" code block thinner */
          .page--landing .code:first-of-type pre[class*='language-'] {
            padding: 20px 25px;
          }

          .page--landing .nav-bar nav {
            max-width: var(--landing-page-max-width);
            padding: 1rem 0 1.1rem;
          }

          .page--landing .side-by-side {
            margin: 0;
          }

          .page--landing .side-by-side .column {
            border-right: none;
            padding-top: 0px;
            overflow: initial;
          }

          .page--landing .code button {
            display: none;
          }

          .page--landing table {
            margin: 0;
            table-layout: fixed;
          }

          .page--landing table tr {
            display: flex;
            gap: 56px;
          }

          .page--landing table td {
            display: flex;
            flex-direction: column;
            padding: 0;
            flex: 1 0 0;
            border-width: 0px;
            gap: 4px;
          }

          .page--landing table h3 {
            font-size: 28px;
            line-height: 38px;
            margin: 0;
            letter-spacing: 0;
          }

          @media screen and (max-width: 1000px) {
            .page--landing table tr {
              flex-direction: column;
              gap: 52px;
            }

            .page--landing table td {
              flex-direction: row;
              align-items: flex-start;
              gap: 36px;
            }

            .page--landing table h3 {
              font-size: 24px;
              line-height: 33px;
            }

            .page--landing .hero {
              padding: 3rem 0 5.3rem;
            }

            .page--landing .get-started {
              padding: 65px 0 85px;
            }

            .page--landing .try {
              padding: 0;
            }

            .page--landing .try section {
              max-width: unset;
            }

            .page--landing .value-props {
              padding-top: 4.5rem;
            }

            .page--landing .by-stripe {
              padding-top: 5.3125rem;
            }
          }

          @media screen and (max-width: 600px) {
            .page--landing .section hr {
              margin: 3rem 0;
            }

            .page--landing table tr {
              flex-direction: column;
              gap: 30px;
            }

            .page--landing table td {
              /* https://stackoverflow.com/questions/23556364/how-to-convert-columns-to-rows-using-css */
              display: block;
              gap: 8px;
            }

            .page--landing .hero {
              padding: 2rem 0 0;
              border-top: none;
            }

            .page--landing .get-started {
              padding: 60px 0 60px;
            }

            .page--landing .value-props {
              padding-top: 0;
            }

            .page--landing .by-stripe {
              padding-top: 3.75rem;
            }

            .footer-bar {
              padding: 2.5rem 0;
            }
          }
        `}
      </style>
    </div>
  );
}
