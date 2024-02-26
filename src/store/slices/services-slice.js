import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  editItem: null
}

export const servicesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.data = action.payload
    },
    createService: (state, action) => {
      state.data.push(action.payload)
    },
    removeService: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload)
    },
    editService: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id)
      state.data.push(action.payload)
    },
    setEditItem: (state, action) => {
      state.editItem = action.payload
    }
  },
})

export const { setServices, createService, removeService, editService, setEditItem } = servicesSlice.actions

export default servicesSlice.reducer