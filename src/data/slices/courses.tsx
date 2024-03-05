import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { courses } from '../../util/constant'

const initialState = {
    coursesData:courses
}

const slice=createSlice({
    name:'courses',
    initialState:initialState,
    reducers:{
        handleAddedItems(state,action:PayloadAction<{courseId:number,type:'add' | 'remove'}>){
             const {courseId,type}= action.payload
             state.coursesData?.map((course)=>{
                if (courseId === course.id){
                        course.isAdded= type === "add" ? true : false
                        toast.success(`course ${type}ed successfully`,{position:"top-center"})
                }
            })
        }
    } 
})

export const {handleAddedItems}= slice.actions

export const reducer=slice.reducer
export default slice