import { useSelector } from 'react-redux'
import AddButton from '../AddButton/AddButton'
import ListItem from '../ListItem/ListItem'

function BookList({ onAddClick, onEditClick }) {
  const contacts = useSelector((state) => state.contacts.contacts)
  const searchValue = useSelector((state) => state.contacts.searchValue)

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className="flex flex-col items-center gap-2 w-full mt-[15px]">
      {filteredContacts.map((contact) => (
        <ListItem
          key={contact.email}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          onEditClick={onEditClick}
        />
      ))}
      <AddButton onAddClick={onAddClick} />
    </div>
  )
}

export default BookList
