import { createSlice } from '@reduxjs/toolkit'
import { users } from '../../data/user.data'

const initialState = {
  user: null,
  message: null
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action) => {
      const findUser = users.find((item) => item.email === action.payload.email)

      if (!findUser) {
        state.message = 'Неверный email или пароль'
      } else {
        const validPassword = findUser.password === action.payload.password

        if (!validPassword) {
          state.message = 'Неверный email или пароль'
        } else {
          state.user = findUser
        }
      }

    },
    register: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  },
})

export const { login, register, logout } = userSlice.actions

export default userSlice.reducer