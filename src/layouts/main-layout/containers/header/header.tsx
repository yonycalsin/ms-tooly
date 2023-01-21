import * as React from 'react'
import { Box, Container, Heading, IconButton, Text, useColorMode, VStack } from '@chakra-ui/react'

import MoonIcon from './moon-icon'
import SunIcon from './sun-icon'

function Header() {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Box
      py="5"
      backgroundColor="primary.50"
      _dark={{
        backgroundColor: 'gray.900',
      }}
      position="relative"
    >
      <Container display="flex" justifyContent="center">
        <VStack>
          <div>
            <IconButton
              colorScheme="primary"
              size="lg"
              borderRadius="full"
              aria-label="Theme Toggle Button"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </div>
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
