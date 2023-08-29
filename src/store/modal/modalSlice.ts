import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
    viewEditTagsModal: boolean,
    viewAddTagsModal: boolean,
    viewCreateNoteModal: boolean,
    viewFilterModal: boolean,
}

const initialState: ModalState = {
    viewEditTagsModal: false,
    viewAddTagsModal: false,
    viewCreateNoteModal: false,
    viewFilterModal: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleTagsModal: (state, { payload }) => {
            const { type, view } = payload;

            if(type === 'add') {
                state.viewAddTagsModal = view;
            }
        },
        toggleCreateNoteModal: () => {},
        toogleFiltersModal: () => {

        }
    }
})

export default modalSlice.reducer