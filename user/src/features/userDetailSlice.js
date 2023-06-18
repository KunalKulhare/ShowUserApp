import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getAllData = createAsyncThunk('showUser', async( args, rejectWithValue)=> {
    const response = await fetch('https://api.github.com/users');
    try {

        const results = await response.json();
        return results;
        
    } catch (error) {

        return rejectWithValue(error)
        
    }
});

export const userDetail = createSlice({
    name: "userDetail",
    initialState : {
        users : [],
        loading : false,
        error : null,
        searchData : []
    },

    reducers : {
        searchUser : (state,action) => {
            state.searchData = action.payload
        }
    },
        extraReducers : {
            [getAllData.pending] : (state) => {
                state.loading = true;
            },
            [getAllData.fulfilled] : (state , action) => {
                state.loading = false;
                state.users = action.payload;
            },
            [getAllData.rejected] : (state, action) => {
                state.loading = false
                state.error = action.payload;
            },
            
        }
    
});


export default userDetail.reducer;

export const { searchUser } = userDetail.actions;
