import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [
    { id: 1, name: 'Igor', email: 'ff@ff.com' },
    { id: 2, name: 'Denis', email: 'd.arthamonov097@gmail.com' },
    { id: 3, name: 'Alexey', email: 'alexey.schmuratow@yandex.ru' },
  ],
  searchValue: '',
  currentEditId: null,
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.name !== action.payload
      )
    },
    setSearch: (state, action) => {
      state.searchValue = action.payload
    },
    setCurrentEditId: (state, action) => {
      state.currentEditId = action.payload
    },
  },
})

export const { addContact, removeContact, setSearch, setCurrentEditId } =
  contactsSlice.actions
export default contactsSlice.reducer
