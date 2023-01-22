import * as React from 'react'
import { Checkbox, FormControl, FormErrorMessage, FormLabel, Textarea, VStack } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ConverterCopyButton } from 'modules/converter/containers/converter-copy-button'
import { ConverterFormFieldName } from 'modules/converter/converter-constants'
import { converterFormValidationSchema } from 'modules/converter/converter-validation-schemas'
import { useConverterStateContext } from 'modules/converter/hooks'

function ConverterForm() {
  const { state, handleSetInput } = useConverterStateContext()

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(converterFormValidationSchema),
    mode: 'onChange',
  })

  return (
    <>
      <VStack spacing="4">
        <FormControl>
          <Checkbox defaultChecked>Convert to full format</Checkbox>
        </FormControl>
        <FormControl isRequired={true} isInvalid={Boolean(errors[ConverterFormFieldName.INPUT]?.message)}>
          <FormLabel>Input</FormLabel>
          <Textarea
            {...register(ConverterFormFieldName.INPUT, {
              onChange: event => handleSetInput(event.target.value),
            })}
          />
          <FormErrorMessage>{errors[ConverterFormFieldName.INPUT]?.message?.toString() ?? ''}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired={true} isInvalid={Boolean(errors[ConverterFormFieldName.OUTPUT]?.message)}>
          <FormLabel>Output</FormLabel>
          <Textarea
            value={state.output ?? ''}
            readOnly
            backgroundColor="gray.100"
            _dark={{
              backgroundColor: 'gray.700',
            }}
          />
        </FormControl>
        <ConverterCopyButton />
      </VStack>
    </>
  )
}

export default ConverterForm
