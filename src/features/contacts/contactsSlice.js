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
        (contact) => contact.id !== action.payload
      )
    },
    setSearch: (state, action) => {
      state.searchValue = action.payload
    },
    setCurrentEditId: (state, action) => {
      state.currentEditId = action.payload
    },
    updateContact: (state, action) => {
      const { inputName, inputEmail } = action.payload
      const contact = state.contacts.find(
        (contact) => contact.id === state.currentEditId
      )
      if (contact) {
        contact.name = inputName
        contact.email = inputEmail
      }
    },
    setContacts: (state, action) => {
      state.contacts = action.payload
    },
  },
})

export const {
  addContact,
  removeContact,
  setSearch,
  setCurrentEditId,
  updateContact,
  setContacts,
} = contactsSlice.actions
export default contactsSlice.reducer
