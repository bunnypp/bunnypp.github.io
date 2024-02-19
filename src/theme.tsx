import { defineStyleConfig, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource-variable/crimson-pro';
import '@fontsource-variable/montserrat';

const colors = {
    primaryFontColor: {
      lightMode: "#5c5c5c",
      darkMode: "#5c5c5c",
    },
    headingFontColor: {
      lightMode: "#353f40",
      darkMode: "#353f40",
    }
}

const theme = extendTheme({
  fonts: {
    heading: `'Crimson Pro Variable', serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
    components: {
        Text: {
            baseStyle: (props: any) => ({
                color: mode(
                  colors.primaryFontColor.lightMode,
                  colors.primaryFontColor.darkMode
                )(props),
            }),
        },
        ListItem: {
            baseStyle: (props: any) => ({
                color: mode(
                  colors.primaryFontColor.lightMode,
                  colors.primaryFontColor.darkMode
                )(props),
            }),
        },
        Heading: {
            baseStyle: (props: any) => ({
                color: mode(
                  colors.headingFontColor.lightMode,
                  colors.headingFontColor.darkMode
                )(props),
            }),
        }
    }
  
})

export default theme;

