import React from 'react'
import Button from './Button'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from './Theming'
import { rgba } from 'polished'

const DarkMode = styled(FiMoon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const DefaultMode = styled(FiSun)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const ThemeToggler = ({ toggleTheme, themeName }) => {
  const theme = useTheme()
  return (
    <Button
      css={{
        background: rgba(theme.colors.text, 0.05),
        borderRadius: '50%',
        width: '2.375rem',
        height: '2.375rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        color: theme.colors.text,
        borderStyle: 'solid',
        borderWidth: '1px',
        '@media (hover: hover)': {
          ':hover': {
            color: theme.colors.white,
          },
        },
      }}
      aria-label={
        themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
      // css={{ position: 'fixed', right: '20px', top: '20px' }}
      onClick={() => toggleTheme(themeName === 'dark' ? 'default' : 'dark')}
    >
      {themeName === 'dark' ? (
        <DefaultMode title="Switch to light mode" />
      ) : (
        <DarkMode title="Switch to dark mode" />
      )}
    </Button>
  )
}
export default ThemeToggler
