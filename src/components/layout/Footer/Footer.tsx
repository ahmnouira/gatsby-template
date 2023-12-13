import React from 'react'

export const Footer = ({}) => (
  <footer
    style={{
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <a href='https://www.gatsbyjs.com'> © {new Date().getFullYear()}, Built with Gatsby</a>
  </footer>
)
