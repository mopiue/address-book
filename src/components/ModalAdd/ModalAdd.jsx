import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addContact } from '../../features/contacts/contactsSlice'

function ModalAdd({ onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const contactId = useSelector((state) => state.contacts.contacts.length) + 1

  const handleContactAdd = () => {
    dispatch(addContact({ contactId, name, email }))
    setName('')
    setEmail('')
    onClose()
  }

  return (
    <>
      <div className="p-[10px] bg-slate-100 rounded-t-lg">
        <div className="font-bold text-lg">My Address Book / New Contact</div>
      </div>
      <div className="flex flex-col gap-[20px] p-[25px] border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300">
        <input
          type="text"
          name="name"
          value={name}
          className="border-[1px] border-black outline-none pl-[10px] w-full h-[30px]"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          className="border-[1px] border-black outline-none pl-[10px] w-full h-[30px]"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="p-[10px] flex justify-end">
        <button
          onClick={onClose}
          className="border-[1px] border-slate-600 rounded-md w-[70px] h-[28px] mr-[15px]"
        >
          Cancel
        </button>
        <button
          onClick={() => handleContactAdd()}
          className="border-[1px] bg-green-400 rounded-md w-[70px] h-[28px] mr-[15px]"
        >
          Ok
        </button>
      </div>
    </>
  )
}

export default ModalAdd
