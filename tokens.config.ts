import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'

export default defineTheme({
  typography: {
    colors: {
      secondary: colors.blue['400']
    }
  },
  prose: {
    code: {
      block: {
        backgroundColor: {
          dark: colors.gray['900']
        }
      }
    }
  }
})