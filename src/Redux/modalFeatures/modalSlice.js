import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
    isWidthOpen: true
}

export const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        openWidth: (state) => {
            state.isWidthOpen = true;
        },
        closeWidth: (state) => {
            state.isWidthOpen = false;
        },
    },
})


export const {openModal, closeModal,openWidth ,closeWidth} = modalSlice.actions

export default modalSlice.reducer