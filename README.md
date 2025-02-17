# R/AB website.

This repository stores the code used for **roryashfordbentley.dev.**

## 🗂️ Build tools, frameworks and core dependencies

The site is built using [Next.js](https://nextjs.org/) as its underlying React framework.

The site uses [PayloadCMS](https://payloadcms.com/) as its CMS

The site deploys to [Vercel](https://vercel.com)

---

## 🚧 Prerequisites

## Currently the site requires Node/NPM installed locally to run until I get around to building a Docker container.

## ➡️ Quickstart

**Clone this repository:**

```sh
git clone git@github.com:roryashfordbentley/rab-website-cms.dev.git
```

**Install dependencies**

```sh
cd app
npm install
```

**Run local development environment**

```sh
npm run dev
```

---

## 🖥️ Project command reference

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                        |
| :-------------------------------- | :-------------------------------------------- |
| `npm install`                     | Installs dependencies                         |
| `npm run dev`                     | Starts local dev server at `localhost:4321`   |
| `npm run dev-storybook`           | Runs local dev server and storybook instance  |
| `npm run build`                   | Runs a Next build                             |
| `npm run create-component [NAME]` | Scaffolds a new componet with stories and css |
