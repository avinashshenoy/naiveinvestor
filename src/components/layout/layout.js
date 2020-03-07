import React from "react"
import { css } from "@emotion/core"
import Header from "./header"

import { rhythm } from "../../utils/typography"

export default ({ children }) => {
  return (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    
    <Header />
    {children}
  </div>
  )
}
