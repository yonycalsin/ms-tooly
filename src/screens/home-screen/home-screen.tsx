import * as React from 'react'
import { Box, Button, Container, FormControl, FormLabel, Heading, Text, Textarea, VStack } from '@chakra-ui/react'

function HomeScreen() {
  return (
    <>
      <Box py="5" backgroundColor="primary.50">
        <Container display="flex" justifyContent="center">
          <VStack spacing="6">
            <Heading display="inline">MS Tooly</Heading>
            <Text textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, reiciendis quod. Laudantium,
              fugiat saepe maiores hic asperiores quos earum, excepturi placeat velit provident repudiandae quo eligendi
              voluptates, dolore obcaecati! Odit.
            </Text>
          </VStack>
        </Container>
      </Box>
      <Box py="10">
        <Container>
          <VStack spacing="6">
            <FormControl isRequired>
              <FormLabel>Input</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Output</FormLabel>
              <Textarea readOnly backgroundColor="gray.100" />
            </FormControl>
            <Box w="full">
              <Button w="full" colorScheme="primary">
                Copy Output
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default HomeScreen
