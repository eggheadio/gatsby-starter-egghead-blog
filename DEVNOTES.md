## ChrisWeekly.com `blog` repo

Repo for TBD CWX blog, under 'ChrisWeekly.com' GH org

This started as `../dotcom/README.md`.
Given leveraging gatsby-starter-egghead-blog, keeping its (Gatsby-derived) README, and DEVNOTES serves diff purpose.
Use of dotcom repo per se = TBD.

20200414:
```
npm i -g gatsby-cli
gatsby new hello
cd hello
gatsby develop
blogdev: http://localhost:8000
GraphiQL: http://localhost:8000/__graphiql
```

20200504:
```
dotcom
git co dev
n -> 13.14.0 (with npm 6.14.4)
npmlsg
  gatsby-cli@2.12.8
  npm@6.14.4
```
// tried gatsby --version, and it complained (hard stop, errors) bc not latest version.
// ok, so try updating gatsby per instructions, npm i -g gatsby-cli, blows up on missing peerdeps? >/
// wtf, errors and missing peer deps... npm still sucks. 
Trust yourself, Chris! you like and know yarn. and global installs are almost always a mistake.
Sure enough, the egghead starter uses yarn:
  https://github.com/eggheadio/gatsby-starter-egghead-blog
  ... tho they invoke npm 1x here https://github.com/eggheadio/gatsby-starter-egghead-blog/blob/master/package.json#L72 
The Gatsby docs are a hot mess. ppl opening issues to complain (rightly) abt broken step-by-step instructions...
TLDR:
Gatsby tutorial recs `brew install node`, then install and use nvm....
I strongly prefer alt:  `brew install n`, then use n for ALL node version mgmt
and use yarn (not npm) for pkg mgmt. full stop. ok.
instead of `gatsby new` (deps on global install, or maybe npx gatsby new?) I think this implies cloning the starter I like?
note once I've installed the starter, it makes no assumptions about global installation of gatsby, rather (properly) including a local dep on gatsby, w version specified. global installations suck. ok.
cloning only as a temp bootstrap mech; not planning to keep connection to the upstream.
(A) clone to another dir, rm the .git dir, mv the contents to new dotcom/blog dir
(B) fork somewhere else on local fs... no, stop. don't need to worry abt pulling in upstream changes from the starter. right? RIGHT.
(C) fork it (no harm, and keeps a possible conn to upstream in case I ever care), then simply pull it down from my repo <- THIS. NOW.

```
dotcom
n -> 13.14.0 (with npm 6.14.4)
// try n 12 -- to confirm which npm I'd invoke... 
n 12
n -> 12.16.3 (still 6.14.4)
n 10 -> 10.20.1 ("")
n 8 -> 8.17.0 (npm 6.13.4)
npm --version 6.13.4 === yep, good, the npm is coming strictly from what's node-provided... which is 100% from n only. perfect.
the /usr/local/lib/ (ie, `npmlsg`) is this same good version, nothing more to do here wrt cleanup. yarn ho!
```

pivot from dotcom repo to forked blog repo

```
n 13
cd ~/repos/github/ChrisWeekly/
git clone git@github.com:eggheadio/gatsby-starter-egghead-blog.git blog
cd blog
yarn
// 13 warnings (not errors) abt unmet peerdeps... but finished, Done in 55.17s.
gatsby develop
// zsh cmd not found -- oh, right, even tho this repo spec's a dep on gatsby-cli^2.8.5, it doesn't provide it. ok, npx it is.
npx gatsby develop
...
You can now view gatsby-starter-egghead-blog in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
success Building development bundle - 17.589s
17 pages

// IDEA: this process was a PITA and relied on plenty of prior knowledge. Ppl are suffering bc of this.
I could write up even just the steps I've done here so far, and it'd provide value. always be writing!

// FTW: local dev env is running, and I can start writing in the blog anytime. 11:21a
√ rename gs-egghead-blog -> blog
√ mv dotcom README to blog/DEVNOTES.md (peer of upstream's README, diff purposes)
