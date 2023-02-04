import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IResultState {
  result: number
  totalQuestion: number
}

const initialState: IResultState = {
  result: 0,
  totalQuestion: 0,
}

export const resultSlice  = createSlice({
  name: 'resultQuiz',
  initialState,
  reducers: {
    incrementResult: (state: IResultState) => {
      state.result ++
    },
    descrementResult: (state: IResultState) => {
      state.result --
    },
    countTotal: (state: IResultState, action: PayloadAction<number>) => {
      state.totalQuestion = action.payload
    },
    resetState : (state: IResultState): void => {
      state.result = 0;
      state.totalQuestion = 0;
    }
  },
})

// Action creators are generated for each case reducer func tion
export const { incrementResult, descrementResult, countTotal, resetState } = resultSlice.actions

export default resultSlice.reducer