import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:"users",
    initialState :[
        {username: "shakil", password: '1228989'},
        {username: "shakib", password: '120120120'},
    ],
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                username: action.payload.username,
                password: action.payload.password
            }
            state.push(newUser)
        },
    }
})

export const { addUser,  userList} = userSlice.actions;
export  const userReducer = userSlice.reducer;