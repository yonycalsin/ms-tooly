import type { ConverterState, UseConverterStateMethods } from 'typings/modules/converter/hooks'

type ConverterStateContextValue = {
  state: ConverterState
} & UseConverterStateMethods

export type { ConverterStateContextValue }
