import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: "loginUser",
    initialState: [
        {}
    ],
    reducers: {
        addLoginUser: (state, action) => {
            const newLoginUser = {
                id: 1,
                user: action.payload.user,
                pass: action.payload.pass,
            }
            state.push(newLoginUser)
        }
    }
})

export const { addLoginUser,  loginList} = loginSlice.actions;
export  const loginReducer = loginSlice.reducer;