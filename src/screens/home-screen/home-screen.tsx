import * as React from 'react'
import { Box, Container } from '@chakra-ui/react'

import { ConverterForm, ConverterStateContext, useConverterState } from 'modules/converter'
import { MainLayout } from 'layouts/main-layout'

const HomeScreenContent = () => {
  const { state, handleSetInput } = useConverterState()

  return (
    <ConverterStateContext.Provider value={{ state, handleSetInput }}>
      <ConverterForm />
    </ConverterStateContext.Provider>
  )
}

function HomeScreen() {
  return (
    <MainLayout>
      <Box py="10">
        <Container>
          <HomeScreenContent />
        </Container>
      </Box>
    </MainLayout>
  )
}

export default HomeScreen
