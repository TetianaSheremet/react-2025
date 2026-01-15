import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../models/IComment.ts";
import {getAll} from "../services/api.service.ts";



const loadComments = createAsyncThunk("loadComments", async (_, thunkAPI) =>{
    const comments = await getAll<IComment[]>('/comments')

    return thunkAPI.fulfillWithValue(comments)
})

type CommentSliceType ={
    comments : IComment []
}

const  initCommentSliceState : CommentSliceType = { comments : []}

export const commentSlice = createSlice ({
    name : "commentSlice",
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers : builder => builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>)=>{state.comments=action.payload
    })
})

export const commentActions = {...commentSlice.actions, loadComments}
