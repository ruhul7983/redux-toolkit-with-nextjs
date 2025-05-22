const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: [],
}

const Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            
            const data = {
                id: nanoid(),
                name: action.payload,
            }
            state.users.push(data);
        },
        removeUser:(state,action)=>{
            const id = action.payload;
            console.log("From slice" + action.payload);
            
            const index = state.users.findIndex((user) => user.id === id);
            if (index !== -1) {
                state.users.splice(index, 1);
            }   
        }
    }
})

export const { addUser,removeUser } = Slice.actions;
export default Slice.reducer;