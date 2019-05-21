import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.blue,
      text: colors.black,
      bg: colors.white,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: colors.pink,
      text: colors.white,
      bg: colors.black,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
