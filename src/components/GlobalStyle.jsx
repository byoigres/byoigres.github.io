import { createGlobalStyle, css } from "styled-components"
import media from "../utils/media-query"

/**
 * Order:
 *  Layout Properties (position, float, clear, display)
 *  Box Model Properties (width, height, margin, padding)
 *  Visual Properties (color, background, border, box-shadow)
 *  Typography Properties (font-size, font-family, text-align, text-transform)
 *  Misc Properties (cursor, overflow, z-index)
 *
 */

const GlobalStyle = createGlobalStyle`

html {
  background-color: ${p => p.theme.colors.backgroundPrimary};
  font-size: ${p => p.theme.fonts.sizes.base};

  ${media.lessThan("md")`
    font-size: ${p => p.theme.fonts.sizes.medium};
  `}

  ${media.lessThan("sm")`
    font-size: ${p => p.theme.fonts.sizes.small};
  `}
}

${p => {
  if (p.type === "fullpage") {
    return css`
      html,
      body,
      #___gatsby,
      #gatsby-focus-wrapper {
        width: 100%;
        height: 100%;
      }
    `
  }
}}

body {
  color: ${p => p.theme.colors.body};
  font-family: ${p => p.theme.fonts.families.body};
}

::-webkit-scrollbar {
  /*
  background-color: ${p => p.theme.colors.backgroundPrimary};
  */
  background-color: #191B1C;
}
::-webkit-scrollbar-thumb {
  /*
  background-color: ${p => p.theme.colors.selection.background};
  */
  background-color: white;
}

::selection {
  background-color: ${p => p.theme.colors.selection.background};
  color: ${p => p.theme.colors.selection.text};
}
::-moz-selection {
  background-color: ${p => p.theme.colors.selection.background};
  color: ${p => p.theme.colors.selection.text};
}
`

export default GlobalStyle
