import * as React from 'react'

import type { ConverterStateContextValue } from 'typings/modules'

const ConverterStateContext = React.createContext<ConverterStateContextValue | null>(null)

export default ConverterStateContext
