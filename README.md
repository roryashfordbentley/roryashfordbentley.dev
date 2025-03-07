# R/AB website.

This repository stores the code used for **roryashfordbentley.dev.**

## 🗂️ Build tools, frameworks and core dependencies

The site is built using [Next.js](https://nextjs.org/) as its underlying React framework.

The site uses [PayloadCMS](https://payloadcms.com/) as its CMS

The site deploys to [Vercel](https://vercel.com)

The site Database engine is MongoDB.

---

## 🚧 Prerequisites

The site requires that the user has [mongodb-database-tools](https://www.mongodb.com/docs/database-tools/installation/installation-macos/) installed locally to migrate the database between local and remote server environments.

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

| Command                           | Action                                         |
| :-------------------------------- | :--------------------------------------------- |
| `npm install`                     | Installs dependencies                          |
| `npm run dev`                     | Starts local dev server at `localhost:4321`    |
| `npm run dev-storybook`           | Runs local dev server and storybook instance   |
| `npm run build`                   | Runs a Next build                              |
| `npm run create-component [NAME]` | Scaffolds a new component with stories and css |
| `npm run create-block [NAME]`     | Scaffolds a new block with stories and css     |

## Database commands

To move the database from local to remote server, or visa-versa the following commands can be used.

### Migrate from local to MongoDB Atlas cluster (local to remote)

#### Backup

```sh
mongodump --uri="mongodb://<host>:<port>/<database_name>" --out ~/Desktop/mongodb-backup
```

#### Restore

```sh
mongorestore --uri="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>" ~/Desktop/mongodb-backup/<database_name>
```

### Migrate from MongoDB Atlas cluster (remote to local)

#### Backup

```sh
mongodump --uri="mongodb://127.0.0.1:27017/<local_database_name>" --out ~/Desktop/mongodb-backup
```

#### Restore

```sh
mongorestore --uri="mongodb+srv://<username>:<password>@<host>/<remote_database_name>" ~/Desktop/mongodb-backup/<local_database_name>
```
