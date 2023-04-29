import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeContact } from '../../features/contacts/contactsSlice'

function ListItem({ name, email }) {
  const dispatch = useDispatch()

  const handleRemoveItem = (name) => {
    dispatch(removeContact(name))
  }

  return (
    <div className="flex w-full border-2 p-[7px] bg-[#e5e5e5] justify-between px-5 items-center rounded-lg">
      <div className="flex flex-col">
        <span className="inline-block w-[max-content] text-black text-base font-bold border-b-[1px] border-dashed border-black cursor-pointer">
          {name}
        </span>
        <span>{email}</span>
      </div>
      <div className="cursor-pointer">
        <AiOutlineClose onClick={() => handleRemoveItem(name)} />
      </div>
    </div>
  )
}

export default ListItem
