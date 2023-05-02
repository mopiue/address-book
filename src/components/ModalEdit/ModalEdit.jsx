import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateContact,
  removeContact,
  setContacts,
} from '../../features/contacts/contactsSlice'
import { validate } from '../../helpers/Validator'

function ModalEdit({ onClose }) {
  const dispatch = useDispatch()

  const currentEditId = useSelector((state) => state.contacts.currentEditId)
  const contacts = useSelector((state) => state.contacts.contacts)

  const currentContact = contacts.find((contact) => {
    return contact.id === currentEditId
  })

  const [inputName, setInputName] = useState(currentContact.name)
  const [inputEmail, setInputEmail] = useState(currentContact.email)
  const [validateName, setValidateName] = useState({})
  const [validateEmail, setValidateEmail] = useState({})
  const [updatedContacts, setUpdatedContacts] = useState([])

  const inputStyle = `h-[40px] px-[10px] rounded-lg bg-[#1e293b] text-[#94a3b8] focus:outline-none hover:bg-[#334155] focus:bg-[#334155]`

  const handleOkClick = () => {
    setValidateName(validate.name(inputName))
    setValidateEmail(validate.email(inputEmail))
  }

  const handleDeleteClick = () => {
    dispatch(removeContact(currentEditId))
    dispatch(setContacts(updatedContacts))

    onClose()
  }

  useEffect(() => {
    if (
      validateName.isValid &&
      validateEmail.isValid &&
      (currentContact.name.trim() !== inputName.trim() ||
        currentContact.email.trim() !== inputEmail.trim())
    ) {
      dispatch(updateContact({ inputName, inputEmail }))
      onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateName, validateEmail, dispatch])

  useEffect(() => {
    setUpdatedContacts(
      contacts
        .filter((contact) => contact.name !== currentContact.name)
        .map((contact, index) => {
          return {
            ...contact,
            id: index + 1,
          }
        })
    )
  }, [contacts, currentContact.name])

  return (
    <>
      <div className="p-[10px] rounded-t-lg">
        <div className="font-bold text-lg text-white">
          My Address Book / Edit Contact
        </div>
      </div>
      <div className="flex flex-col gap-[10px] p-[25px] border-t-[1px] border-t-[#353f4f] border-b-[1px] border-b-[#353f4f]">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className={`${inputStyle} ${
            validateName.isValid !== undefined && !validateName.isValid
              ? 'border-2 border-red-400'
              : ''
          }`}
        />
        <span className="text-white">
          {!validateName.isValid && validateName.errorMessage}
        </span>
        <input
          type="text"
          name="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          className={`${inputStyle} ${
            validateEmail.isValid !== undefined && !validateEmail.isValid
              ? 'border-2 border-red-400'
              : ''
          }`}
        />
        <span className="text-white">
          {!validateEmail.isValid && validateEmail.errorMessage}
        </span>
      </div>
      <div className="px-[10px] py-[20px] flex justify-between mx-[15px]">
        <button
          onClick={() => handleDeleteClick()}
          className="hover:bg-[#26314a] border-[1px] border-slate-600 bg-[#1c2538] text-[#94a3b8] rounded-md w-[70px] h-[32px]"
        >
          Delete
        </button>
        <div className="flex gap-[10px]">
          <button
            onClick={onClose}
            className="hover:bg-[#26314a] border-[1px] border-slate-600 bg-[#1c2538] text-[#94a3b8] rounded-md w-[70px] h-[32px]"
          >
            Cancel
          </button>
          <button
            onClick={() => handleOkClick()}
            className="hover:bg-[#26314a] border-[1px] border-slate-600 bg-[#1c2538] text-[#94a3b8] rounded-md w-[70px] h-[32px]"
          >
            Ok
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalEdit
