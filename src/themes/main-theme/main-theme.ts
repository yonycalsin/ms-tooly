import { extendTheme, theme } from '@chakra-ui/react'

const mainTheme = extendTheme({
  colors: {
    primary: theme.colors.purple,
    secondary: theme.colors.orange,
    error: theme.colors.red,
    warning: theme.colors.yellow,
    success: theme.colors.green,
  },
})

export default mainTheme
