var plugins = [{
      plugin: require('/Users/vojtechholik/Documents/Work/egghead/Dev/gatsby-theme/node_modules/gatsby-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md",".markdown"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"backgroundColor":"#fafafa","maxWidth":1035,"sizeByPixelDensity":true}}]},
    },{
      plugin: require('/Users/vojtechholik/Documents/Work/egghead/Dev/gatsby-theme/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/vojtechholik/Documents/Work/egghead/Dev/gatsby-theme/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"My Blog","short_name":"Starter Blog","description":"This is where they post things!","start_url":"/","background_color":"#2b2e3c","theme_color":"#5348FF","display":"standalone","icons":[{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/vojtechholik/Documents/Work/egghead/Dev/gatsby-theme/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"GOOGLE_ID"},
    },{
      plugin: require('/Users/vojtechholik/Documents/Work/egghead/Dev/gatsby-theme/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMdx(\n                  limit: 1000,\n                  filter: { frontmatter: { published: { ne: false } } }\n                  sort: { order: DESC, fields: [frontmatter___date] }\n                ) {\n                  edges {\n                    node {\n                      excerpt(pruneLength: 250)\n                      fields { \n                        slug\n                        date\n                      }\n                      frontmatter {\n                        title\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"Blog RSS Feed"}]},
    },{
      plugin: require('/Users/vojtechholik/Documents/Work/egghead/Dev/gatsby-theme/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"/Users/vojtechholik/Documents/Work/egghead/Dev/gatsby-theme/packages/gatsby-theme-egghead-blog/src/lib/typography.js"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
