import * as React from 'react'
import { Box, Container, Heading, Text, useColorMode, VStack } from '@chakra-ui/react'

function Header() {
  const { toggleColorMode } = useColorMode()

  return (
    <Box
      py="5"
      backgroundColor="primary.50"
      _dark={{
        backgroundColor: 'gray.900',
      }}
    >
      <Container display="flex" justifyContent="center">
        <VStack>
          <Heading
            fontWeight="extrabold"
            fontStyle="italic"
            cursor="pointer"
            display="inline"
            onClick={toggleColorMode}
          >
            MS Tooly
          </Heading>
          <Text textAlign="center">
            Use <b>ms-tooly</b> to easily convert various time formats to milliseconds.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Header
