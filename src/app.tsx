import * as React from 'react'
import { Button, ChakraProvider, Container, HStack } from '@chakra-ui/react'

import { mainTheme } from 'themes'

function App() {
  return (
    <ChakraProvider theme={mainTheme}>
      <Container my="10">
        <HStack>
          <Button>Click Me</Button>
          <Button colorScheme="primary">Click Me</Button>
        </HStack>
      </Container>
    </ChakraProvider>
  )
}

export default App
