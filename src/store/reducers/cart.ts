import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      // eslint-disable-next-line prettier/prettier
      const game = state.items.find(item => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('Jogo já adicionado ao carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line prettier/prettier
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    // eslint-disable-next-line prettier/prettier
    open: state => {
      state.isOpen = true
    },
    // eslint-disable-next-line prettier/prettier
    close: state => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
