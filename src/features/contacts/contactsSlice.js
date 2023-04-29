import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [
    { name: 'Igor', email: 'ff@ff.com' },
    { name: 'Denis', email: 'd.arthamonov097@gmail.com' },
    { name: 'Alexey', email: 'alexey.schmuratow@yandex.ru' },
  ],
  searchValue: '',
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
  },
})

export const { addContact, removeContact, setSearch } = contactsSlice.actions
export default contactsSlice.reducer
