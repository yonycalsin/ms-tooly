import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { mainTheme } from 'themes'
import { HomeScreen } from 'screens/home-screen'

function App() {
  return (
    <ChakraProvider theme={mainTheme}>
      <HomeScreen />
    </ChakraProvider>
  )
}

export default App
