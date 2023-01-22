import type { ConverterStateActionTypes, ConverterTabs } from 'modules/converter'

interface ConverterState {
  tab: ConverterTabs
  input: string
  output: string
}

type ConverterStateActionPayloadPaired = {
  [ConverterStateActionTypes.SET_INPUT]: Required<Pick<ConverterState, 'input'>>
}

type ConverterStateAction = {
  type: ConverterStateActionTypes
  payload?: ConverterStateActionPayloadPaired[ConverterStateActionTypes]
}

type UseConverterStateMethods = {
  handleSetInput: (input: string) => void
}

export type { ConverterState, ConverterStateAction, ConverterStateActionPayloadPaired, UseConverterStateMethods }
