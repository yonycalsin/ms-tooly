import * as React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
  useColorMode,
  VStack,
} from '@chakra-ui/react'

function HomeScreen() {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        py="5"
        backgroundColor="primary.50"
        _dark={{
          backgroundColor: 'gray.900',
        }}
      >
        <Container display="flex" justifyContent="center">
          <VStack>
            <Heading display="inline" onClick={toggleColorMode}>
              MS Tooly
            </Heading>
            <Text textAlign="center">
              Use <b>ms-tooly</b> to easily convert various time formats to milliseconds.
            </Text>
          </VStack>
        </Container>
      </Box>
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
    </>
  )
}

export default HomeScreen
