import * as React from 'react'
import ms from 'ms'

import type { ConverterState, ConverterStateAction, ConverterStateActionPayloadPaired } from 'typings/modules'
import { ConverterStateActionTypes, ConverterTabs } from 'modules/converter/converter-constants'

const initialState: ConverterState = {
  tab: ConverterTabs.VALUE_TO_MS,
  input: '0',
  output: '0',
}

const reducer = (state: ConverterState, action: ConverterStateAction) => {
  const { type, payload } = action

  switch (type) {
    case ConverterStateActionTypes.SET_INPUT: {
      const { input } = payload as ConverterStateActionPayloadPaired[ConverterStateActionTypes.SET_INPUT]

      if (state.input === input) {
        return state
      }

      const newState = { ...state }

      let newOutput = input

      if (state.tab === ConverterTabs.VALUE_TO_MS) {
        const result = ms(newOutput ? newOutput : '0')

        newOutput = String(result ? result : '0')
      } else {
        const result = ms(input ? Number(input) : 0, { long: true })

        newOutput = String(result ? result : 0)
      }

      newState.input = input

      newState.output = newOutput

      return newState
    }

    default: {
      throw new Error(`The action ${type as string} is not supported`)
    }
  }
}

const useConverterState = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const handleSetInput = (input: string) => {
    dispatch({
      type: ConverterStateActionTypes.SET_INPUT,
      payload: { input },
    })
  }

  return {
    state,
    handleSetInput,
  }
}

export default useConverterState
