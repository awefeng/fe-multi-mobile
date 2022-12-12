import { configureStore } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './rootReducer'
import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: rootReducer
})

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
export const dispatch = store.dispatch
export default store
