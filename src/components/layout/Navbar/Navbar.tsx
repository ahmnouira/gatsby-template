import React from 'react'
import { Banner } from '../Banner/Banner'

type HeaderProps = {
  siteTitle?: string
}

export const Navbar = ({ siteTitle }: HeaderProps) => {
  return <Banner />
}
