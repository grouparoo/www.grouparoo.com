# www.grouparoo.com

The Grouparoo public website & Docs.

[![CircleCI](https://circleci.com/gh/grouparoo/www.grouparoo.com.svg?style=svg&circle-token=2747e60bdaad93f1d253a42af07930e517106f64)](https://circleci.com/gh/grouparoo/www.grouparoo.com)

## Getting Started:

```bash
# Assuming you have Node v12 and NPM installed...

# Clone this repository
git clone git@github.com:grouparoo/www.grouparoo.com.git
cd www.grouparoo.com

# Install dependencies
npm install

# Configure your local environment variables in .env
cp .env.example .env
open .env

# Run the project in development mode
npm run dev
```

## To Test:

You will need `chromedriver` installed to run the automated browser tests:

- OSX: `brew cask install chromedriver`
- Windows: TODO
- Linux: TODO

```bash
npm test # I will also run the build and lint commands
```

## Deployment

**Pull Requests**

- All Pull Requests are automatically built by Vercel which you can preview. Check your Pull Request for more information and a link

**Master Branch**

- All changes to the `master` branch are automatically deployed to www.grouparoo.com (assuming tests pass).

🦘
