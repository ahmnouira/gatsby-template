import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import { Layout } from '../components/layout/Layout'
import { Seo } from '../components/shared/Seo'

const AboutPage: FC<PageProps<{}>> = ({}: PageProps<{}>) => (
  <Layout>
    <Seo title='About' />
    <h1>About</h1>
  </Layout>
)

export default AboutPage
