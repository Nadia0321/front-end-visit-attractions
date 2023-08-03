import { configureStore } from "@reduxjs/toolkit";
import loginStatusreducer from './loginStatusSlice'

const store = configureStore({
    reducer: {
        loginStatus: loginStatusreducer
    }
})

export default store