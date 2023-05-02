import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeContact,
  setContacts,
} from '../../features/contacts/contactsSlice'
import { setCurrentEditId } from '../../features/contacts/contactsSlice'
import { useEffect, useState } from 'react'

function ListItem({ id, name, email, onEditClick }) {
  const [updatedContacts, setUpdatedContacts] = useState([])
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts)

  useEffect(() => {
    setUpdatedContacts(
      contacts
        .filter((contact) => contact.name !== name)
        .map((contact, index) => {
          return {
            ...contact,
            id: index + 1,
          }
        })
    )
  }, [contacts, name])

  const handleRemoveItem = (name) => {
    dispatch(removeContact(name))
    dispatch(setContacts(updatedContacts))
  }

  const handleEditClick = () => {
    onEditClick()
    dispatch(setCurrentEditId(id))
  }

  return (
    <div
      className={`flex w-full border-2 p-[7px] ${
        id % 2 === 0
          ? 'bg-[#314361] border-[#445d87]'
          : 'bg-[#1e293b] border-[#353f4f]'
      } justify-between px-5 items-center rounded-lg hover:bg-opacity-70`}
    >
      <div className="flex flex-col">
        <span
          onClick={() => handleEditClick()}
          className="inline-block w-[max-content] text-white text-base font-bold border-b-[1px] border-dashed border-white cursor-pointer"
        >
          {name}
        </span>
        <span className="text-white">{email}</span>
      </div>
      <div className="cursor-pointer">
        <AiOutlineClose
          onClick={() => handleRemoveItem(id)}
          className="text-[#94a3b8]"
        />
      </div>
    </div>
  )
}

export default ListItem
