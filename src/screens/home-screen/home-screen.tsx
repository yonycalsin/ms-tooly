import * as React from 'react'
import { Box, Button, Checkbox, Container, FormControl, FormLabel, Textarea, VStack } from '@chakra-ui/react'

import { MainLayout } from 'layouts/main-layout'

function HomeScreen() {
  return (
    <MainLayout>
      <Box py="10">
        <Container>
          <VStack spacing="4">
            <FormControl>
              <Checkbox defaultChecked>Convert to full format</Checkbox>
            </FormControl>
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
    </MainLayout>
  )
}

export default HomeScreen
