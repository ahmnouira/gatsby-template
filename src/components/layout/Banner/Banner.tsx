import React from 'react'
import { Container } from './styles'
import { StaticImage } from 'gatsby-plugin-image'

export const Banner = ({}) => (
  <Container>
    <StaticImage src='../../../images/gatsby-icon.png' quality={100} alt='' />
  </Container>
)
