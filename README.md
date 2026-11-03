# Mohammad Faisal's portfolio

React portfolio built with Vite and Sass, deployed to GitHub Pages at https://mohdfaisal.xyz.

## Local development

Use Node 24 (see `.nvmrc`), then:

```sh
npm ci
npm run dev
```

Open the URL Vite prints. Changes reload automatically.

```sh
npm test          # component smoke test
npm run build     # production output in dist/
npm run preview   # serve the production build locally
```

Docker development is also available with `docker compose up --build` on port 3000.

## Deployment

GitHub Actions tests and builds pull requests. Pushes to `main` also deploy `dist/` to GitHub Pages using the built-in GITHUB_TOKEN; no deployment key is needed.

In repository Settings > Pages, set Source to **GitHub Actions** and Custom domain to **mohdfaisal.xyz**. Enable Enforce HTTPS once GitHub issues the certificate. `public/CNAME` records the intended domain in the output; the Pages setting is authoritative for Actions deployments.

### Cloudflare DNS

Keep Cloudflare as the DNS provider. Set these website records to **DNS only** (gray cloud), TTL Auto:

| Type | Name | Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | faisalhmohd.github.io |

Replace conflicting website A/AAAA/CNAME records for `@` and `www`; keep mail records and unrelated subdomains. If using IPv6, use GitHub Pages' four published AAAA addresses rather than a previous host's addresses. DNS and certificate issuance may take time. GitHub redirects www to the configured apex domain once both resolve correctly.

## Archived versions

- `legacy-nextjs-2023`: previous Next.js / Markdown site, including its articles.
- `main-legacy`: original React portfolio before modernization.

The visual design and historical profile content are retained. Content updates and accessibility improvements are separate follow-up work.
