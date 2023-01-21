import * as React from 'react'
import { Box, Container, Link, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
      mt="auto"
      py="6"
      backgroundColor="secondary.50"
      _dark={{
        backgroundColor: 'gray.900',
      }}
    >
      <Container>
        <Text textAlign="center" fontWeight="bold" fontSize="lg">
          Created by{' '}
          <Link
            href="https://www.yonycalsin.com/?utm_source=ms_tooly&utm_medium=footer&utm_campaign=author_attribution"
            target="_blank"
            textColor="secondary.500"
          >
            Yony Calsin
          </Link>
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
