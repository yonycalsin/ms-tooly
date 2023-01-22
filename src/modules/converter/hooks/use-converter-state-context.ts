import * as React from 'react'

import { ConverterStateContext } from 'modules/converter/contexts'

function useConverterStateContext() {
  const value = React.useContext(ConverterStateContext)

  if (!value) {
    throw new Error(`useConverterStateContext must be wrapped with ConverterStateContext.Provider`)
  }

  return value
}

export default useConverterStateContext
