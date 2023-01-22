import * as React from 'react'
import { Box, Button, useClipboard } from '@chakra-ui/react'

import { useConverterStateContext } from 'modules/converter/hooks'

function ConverterCopyButton() {
  const { state } = useConverterStateContext()

  const { onCopy, setValue, hasCopied } = useClipboard('')

  React.useEffect(() => {
    if (!state.output) {
      return
    }

    setValue(state.output)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.output])

  return (
    <Box w="full">
      <Button onClick={onCopy} w="full" colorScheme="primary" isDisabled={!state.output}>
        {hasCopied ? 'Output copied!' : 'Copy Output'}
      </Button>
    </Box>
  )
}

export default ConverterCopyButton
