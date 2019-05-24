import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.blue,
      link: colors.blue,
      title: colors.black,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: colors.pink,
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: colors.pink,
      title: colors.pink,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
