import { z } from 'zod'

import { ConverterFormFieldName } from './converter-constants'

const converterFormValidationSchema = z.object({
  [ConverterFormFieldName.INPUT]: z.string().min(1, 'This field is required'),
})

export { converterFormValidationSchema }
