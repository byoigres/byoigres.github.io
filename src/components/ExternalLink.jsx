import React from "react"

const ExternalLink = ({ uri, children }) => (
  <a href="uri" target="_blank" rel="nofollow noopener noreferrer">
    {children}
  </a>
)

export default ExternalLink
