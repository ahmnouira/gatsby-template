import React from 'react'
import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../components/layout/Layout'
import { Seo } from '../components/shared/Seo'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <h1>Hi people</h1>
    <StaticImage
      src='../images/gatsby-astronaut.png'
      width={300}
      quality={80}
      formats={['auto', 'webp', 'avif']}
      alt='A Gatsby astronaut'
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
