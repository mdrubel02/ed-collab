import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoginModalOpen: false,
    isSignupModalOpen: false,
    isWidthOpen: true
}

export const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openLoginModal: (state) => {
            state.isLoginModalOpen = true;
        },
        closeLoginModal: (state) => {
            state.isLoginModalOpen = false;
        },

        openSignupModal : (state) =>{
            state.isSignupModalOpen = true;
        },
        closeSignupModal : (state) =>{
            state.isSignupModalOpen = false;
        },
        openWidth: (state) => {
            state.isWidthOpen = true;
        },
        closeWidth: (state) => {
            state.isWidthOpen = false;
        },
    },
})


export const {openLoginModal, closeLoginModal,openSignupModal ,closeSignupModal ,openWidth ,closeWidth} = modalSlice.actions

export default modalSlice.reducer