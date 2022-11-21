# texblog
A personal blog used to share some interesting ideas, powered by 11ty static site generator

## Usage

There are some scripts defined in package.json file

### Start a web server for dev

```console
$ npm start
```

This command is the same as executing

```console
$ npx @11ty/eleventy --serve
```

### Build the site

```console
$ npm run build
```

This command is the same as executing

```console
$ npx @11ty/eleventy
```

### Deploy to GitHub pages

```console
$ npm run deploy
```
This command is the same as executing

```console
$ gh-pages -d public
```

It uses the [gh-pages](https://www.npmjs.com/package/gh-pages) package, and publish all the content inside ./public/
directory to gh-pages branch

> Important: you may want to execute
> ```console
> $ npm run build
> ```
> first, in order to generate the site inside ./public directory before publishing
> into gh-pages branch

if you use a custom domain, set the domain in src/CNAME file, adding the following line

```javascript
    eleventyConfig.addPassthroughCopy("./src/CNAME");
```
on .eleventy.js file

## Config
Site configuration variables are on src/_data/site.js file
