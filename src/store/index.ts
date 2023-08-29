import {configureStore} from "@reduxjs/toolkit";
import menuReducer from './menu/menuSlice.ts'
import modalReducer from './modal/modalSlice.ts'
import notesListReducer from './notesList/notesListSlice.ts'
import tagsReducer from './tags/tagSlice.ts'


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        modal: modalReducer,
        tags: tagsReducer,
        notesList: notesListReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;