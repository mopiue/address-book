import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateContact,
  removeContact,
} from '../../features/contacts/contactsSlice'
import { validate } from '../../helpers/Validator'

function ModalEdit({ onClose }) {
  const dispatch = useDispatch()
  const currentEditId = useSelector((state) => state.contacts.currentEditId)
  const contacts = useSelector((state) => state.contacts.contacts)

  const currentContact = contacts.find((contact) => {
    return contact.id === currentEditId
  })

  const [name, setName] = useState(currentContact.name)
  const [email, setEmail] = useState(currentContact.email)
  const [validateName, setIsValidateName] = useState({
    isValid: true,
    errorMessage: '',
  })

  const handleOkClick = () => {
    setIsValidateName(validate.name(name))

    console.log(validate.name(name), currentContact.name.trim() !== name.trim())

    if (validateName.isValid && currentContact.name.trim() !== name.trim()) {
      dispatch(updateContact({ name, email }))
    }

    // onClose()
  }

  const handleDeleteClick = () => {
    dispatch(removeContact(currentEditId))
    onClose()
  }

  // useEffect(() => {
  //   if (name.length === 0 && email.length === 0) {
  //     setName(currentContact.name)
  //     setEmail(currentContact.email)
  //   }
  // }, [currentContact, name, email])

  return (
    <>
      <div className="p-[10px] bg-slate-100 rounded-t-lg">
        <div className="font-bold text-lg">My Address Book / Edit Contact</div>
      </div>
      <div className="flex flex-col gap-[20px] p-[25px] border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${
            !validateName.isValid ? 'border-2 border-red-400' : ''
          } border-[1px] border-black outline-none pl-[10px] w-full h-[30px]`}
        />
        {!validateName.isValid && validateName.errorMessage}
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-[1px] border-black outline-none pl-[10px] w-full h-[30px]"
        />
      </div>
      <div className="p-[10px] flex justify-between mx-[15px]">
        <button
          onClick={() => handleDeleteClick()}
          className="border-[1px] bg-red-500 rounded-md w-[70px] h-[28px] "
        >
          Delete
        </button>
        <div className="flex gap-[10px]">
          <button
            onClick={onClose}
            className="border-[1px] border-slate-600 rounded-md w-[70px] h-[28px]"
          >
            Cancel
          </button>
          <button
            onClick={() => handleOkClick()}
            className="border-[1px] bg-green-400 rounded-md w-[70px] h-[28px]"
          >
            Ok
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalEdit
