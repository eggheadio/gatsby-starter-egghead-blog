# egghead.io creator MDX Blog Starter Project

This is based on Robin Wieruch's https://github.com/rwieruch/gatsby-mdx-blog-starter-project

Lots of nice pieces are also borrowed from Jason Lengstorf https://github.com/jlengstorf/lengstorf.com

A starter project in [Gatsby.js](https://www.gatsbyjs.org/) with [MDX](https://github.com/mdx-js/mdx).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eggheadio/gatsby-starter-egghead-blog)

## Features

- MDX: JavaScript/React in Markdown
- Prism.js: Syntax Highlighting
- Pagination
- Emotion
- Typography.js
- Self-hosted fonts ([Inter UI](https://rsms.me/inter/))
- Social media share buttons
- Site & Theme config files
- ConvertKit subscribe form (Formik and Yup)
- Placeholder illustrations by [Katerina Limpitsouni](https://twitter.com/ninalimpi) from [undraw.co](https://undraw.co/)

## [➞ Demo](https://egghead-gatsby-starter.netlify.com/)

## Setup

- `git clone git@github.com:eggheadio/gatsby-starter-egghead-blog.git`
- `cd gatsby-starter-egghead-blog`
- `yarn`
- `gatsby develop`
- visit http://localhost:8000

## Setup via Gatsby CLI

- `gatsby new gatsby-starter-egghead-blog git@github.com:eggheadio/gatsby-starter-egghead-blog.git`
- `cd gatsby-starter-egghead-blog`
- `yarn`
- `gatsby develop`
- visit http://localhost:8000

## Set up Redirects
This starter supports a `redirects` property on posts so that you can define alias urls for blog posts. This won't work out of the box. We use the `createRedirect` Gatsby actions ([docs](https://www.gatsbyjs.org/docs/actions/#createRedirect)) which requires an additional plugin to be added to your site, given what provider you deploy your site to. Two popular ones are [`gatsby-plugin-netlify`](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/) or [`gatsby-plugin-s3`](https://www.gatsbyjs.org/packages/gatsby-plugin-s3/).
