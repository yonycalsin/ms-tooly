import * as React from 'react'
import { Box } from '@chakra-ui/react'

import type { MainLayoutProps } from 'typings/layouts'
import { Footer, Header } from './containers'

function MainLayout(props: MainLayoutProps) {
  const { children } = props

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
