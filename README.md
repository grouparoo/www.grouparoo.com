# www.grouparoo.com

The Grouparoo public website, blog, & docs.

[![CircleCI](https://circleci.com/gh/grouparoo/www.grouparoo.com.svg?style=svg&circle-token=2747e60bdaad93f1d253a42af07930e517106f64)](https://circleci.com/gh/grouparoo/www.grouparoo.com)

## Getting Started:

```bash
# Assuming you have Node v12 and NPM installed...

# Clone this repository
git clone git@github.com:grouparoo/www.grouparoo.com.git
cd www.grouparoo.com

# Install dependencies
npm install

# Run the project in development mode
npm run dev
```

If you run into an issue installing Sharp on an Apple M1 machine, make sure `vips` is installed properly. ([See this issue](https://github.com/lovell/sharp/issues/2460#issuecomment-751491241) for more information.)

```bash
brew install vips
```

If you find yourself needing to change the API endpoint that the webiste is using, you can use the `API_URL` environment variable, ie: `API_URL=http://localhost:8080`

## To Test:

You will need `chromedriver` installed to run the automated browser tests:

- OSX: `brew install --cask chromedriver`
- Linux: TODO

```bash
npm test # I will also run the build and lint commands
```

## Deployment

**Pull Requests**

- All Pull Requests are automatically built by Vercel which you can preview. Check your Pull Request for more information and a link

**Main Branch**

- All changes to the `main` branch are automatically deployed to www.grouparoo.com (assuming tests pass).

## Attribution

- All logos & names used to describe plugins are property of their respective owners
- [Light burst](https://unsplash.com/photos/voM1Z9cGPCU) image via of Unsplash

🦘
