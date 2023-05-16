import React, { PropsWithChildren } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Footer } from '../Footer'
import { Banner } from '../Banner/Banner'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Banner />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}
