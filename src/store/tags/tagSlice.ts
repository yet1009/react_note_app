import {createSlice} from "@reduxjs/toolkit";
import {v4} from 'uuid';


const initialState = {
    tagList: [
        {tag: 'learnings', id: v4() },
        {tag: 'work', id: v4() },
        {tag: 'qeotes', id: v4() }
    ]
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {}
})

export default tagsSlice.reducer