# Angadi Website

React + Vite website for Angadi billing software. Every page is pre-rendered to HTML at build time (vite-react-ssg) so Google can read it, and the site is mobile responsive.

## Run on your computer

1. Install Node.js 20 or newer from https://nodejs.org
2. Open a terminal in this folder (`E:\Angadi\Angadi-Website`)
3. Install packages: `npm install`
4. Start the dev server: `npm run dev`, then open http://localhost:5173
5. Make the production build: `npm run build` (output goes to the `dist` folder, upload that folder to your hosting)

## Folder structure

```
public/            favicon, robots.txt, sitemap.xml
src/
  data/site.js     phone number, menu links, website domain
  components/      Header, Footer, Logo, WhatsApp/Call button, SEO tags
  components/home/ Home page sections (Hero, Business types, Features, Reviews, Free trial)
  pages/           One file per page
  styles/global.css  All styles
```

## Before going live

- The pricing page includes a local-development-only payment preview (`npm run dev`). The success screen is a visual demo: it does not charge money, issue licences or send email. Production builds validate the form and show a contact message instead. Connect a payment backend with server-verified payments, server-owned plan amounts and licence-email delivery before enabling live checkout. Never show success solely from form submission or a URL parameter.

- Change `SITE_URL` in `src/data/site.js` and the domain in `public/robots.txt` and `public/sitemap.xml` to your real domain.
- Replace the sample numbers (10,000+ customers etc.) and reviews in `src/components/home/` with real ones.
