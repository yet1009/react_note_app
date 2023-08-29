import {createSlice} from "@reduxjs/toolkit";
import {Note} from "../../types/note.ts";


interface NotesState {
    mainNotes: Note[];
    archiveNotes: Note[],
    trashNotes: Note[],
    editNotes: null | Note[],
}

const initialState: NotesState = {
    mainNotes: [],
    archiveNotes: [],
    trashNotes: [],
    editNotes: null,
}

const notesListSlice = createSlice({
    name: 'notesList',
    initialState,
    reducers: {}
})

export default notesListSlice.reducer;

