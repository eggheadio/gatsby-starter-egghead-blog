# egghead.io creator MDX Blog Starter Project

This uses the gatsby-theme-egghead-blog Gatsby theme.

## Override theme components (Component Shadowing)

To override a theme component you will need to add `starter/src/gatsby-theme-egghead-blog`. You may override anything in the `gatsby-theme-egghead-blog/src` directory.

For example, if you would like to override the default `Header` component. You would a file like this.

```js
// starter/src/gatsby-theme-egghead-blog/Header.js
import React from 'react'

class Header extends React.Component {
    render(){
        return (
            <div>hello egghead</div>
            )
    }
}

export default Header
```

Now "hello egghead" will be rendered anywhere the old Header component was render.
