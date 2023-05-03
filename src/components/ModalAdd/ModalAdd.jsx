import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { addContact } from '../../features/contacts/contactsSlice'
import { validate } from '../../helpers/'

function ModalAdd({ onClose }) {
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [validateName, setValidateName] = useState({})
  const [validateEmail, setValidateEmail] = useState({})

  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts)
  const maxId = useRef(
    contacts.reduce((max, item) => {
      return item.id > max ? item.id : max
    }, 0)
  )

  const inputStyle = `h-[40px] px-[10px] rounded-lg bg-[#1e293b] text-[#94a3b8] focus:outline-none hover:bg-[#334155] focus:bg-[#334155]`

  const handleContactAdd = () => {
    setValidateName(validate.name(inputName))
    setValidateEmail(validate.email(inputEmail))
  }

  useEffect(() => {
    if (validateName.isValid && validateEmail.isValid) {
      maxId.current += 1

      dispatch(
        addContact({
          id: maxId.current,
          name: inputName,
          email: inputEmail.toLowerCase(),
        })
      )
      setInputName('')
      setInputEmail('')

      onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateName, validateEmail, dispatch])

  return (
    <>
      <div className="p-[10px] rounded-t-lg">
        <div className="font-bold text-lg text-white">
          My Address Book / New Contact
        </div>
      </div>
      <div className="flex flex-col gap-[10px] p-[25px] border-t-[1px] border-t-[#353f4f] border-b-[1px] border-b-[#353f4f]">
        <input
          type="text"
          name="name"
          value={inputName}
          className={`${inputStyle} ${
            validateName.isValid !== undefined && !validateName.isValid
              ? 'border-2 border-red-400'
              : ''
          }`}
          placeholder="Name"
          onChange={(e) => setInputName(e.target.value)}
        />
        <span className="text-white">
          {!validateName.isValid && validateName.errorMessage}
        </span>
        <input
          type="text"
          name="email"
          value={inputEmail}
          className={`${inputStyle} ${
            validateEmail.isValid !== undefined && !validateEmail.isValid
              ? 'border-2 border-red-400'
              : ''
          }`}
          placeholder="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <span className="text-white">
          {!validateEmail.isValid && validateEmail.errorMessage}
        </span>
      </div>
      <div className="py-[20px] px-[10px] flex justify-end">
        <button
          onClick={onClose}
          className="hover:bg-[#26314a] border-[1px] border-slate-600 bg-[#1c2538] text-[#94a3b8] rounded-md w-[70px] h-[32px] mr-[15px]"
        >
          Cancel
        </button>
        <button
          onClick={() => handleContactAdd()}
          className="hover:bg-[#26314a] border-[1px] border-slate-600 bg-[#1c2538] text-[#94a3b8] rounded-md w-[70px] h-[32px] mr-[15px]"
        >
          Ok
        </button>
      </div>
    </>
  )
}

export default ModalAdd
