import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ModalEdit({ onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const currentEditId = useSelector((state) => state.contacts.currentEditId)
  const contacts = useSelector((state) => state.contacts.contacts)

  const currentContact = contacts.filter((contact) => {
    return contact.id === currentEditId
  })

  useEffect(() => {
    setName(currentContact[0].name)
    setEmail(currentContact[0].email)
  }, [currentContact])

  return (
    <>
      <div className="p-[10px] bg-slate-100 rounded-t-lg">
        <div className="font-bold text-lg">My Address Book / Edit Contact</div>
      </div>
      <div className="flex flex-col gap-[20px] p-[25px] border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300">
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="border-[1px] border-black outline-none pl-[10px] w-full h-[30px]"
          placeholder={name}
        />
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-[1px] border-black outline-none pl-[10px] w-full h-[30px]"
          placeholder={email}
        />
      </div>
      <div className="p-[10px] flex justify-between mx-[15px]">
        <button className="border-[1px] bg-red-500 rounded-md w-[70px] h-[28px] ">
          Delete
        </button>
        <div className="flex gap-[10px]">
          <button
            onClick={onClose}
            className="border-[1px] border-slate-600 rounded-md w-[70px] h-[28px]"
          >
            Cancel
          </button>
          <button className="border-[1px] bg-green-400 rounded-md w-[70px] h-[28px]">
            Ok
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalEdit
