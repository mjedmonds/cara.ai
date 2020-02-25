import caraDefaultTheme from "@lekoarts/gatsby-theme-cara/src/gatsby-plugin-theme-ui/index"

export default {
  ...caraDefaultTheme,
  colors: {
    ...caraDefaultTheme.colors,
    initialColorMode: `light`,
  },
}
