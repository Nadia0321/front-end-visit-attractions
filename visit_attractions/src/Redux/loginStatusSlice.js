import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
}

export const loginStatus = createSlice({
    name: 'loginStatus',
    initialState,
    reducer: {
        checkIsLogin: (state) => {
            state.isLogin = true
        },
        logout: (state) => {
            state.isLogin = false
        }
    }

})

// Action creators are generated for each case reducer function
export const { checkIsLogin, logout } = loginStatus.actions

export default loginStatus.reducer