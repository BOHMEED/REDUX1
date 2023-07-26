import { configureStore } from '@reduxjs/toolkit'
import taskslice from './slices/taskslice'

export const store = configureStore({
    reducer: {
        taskslice:taskslice
    },
})