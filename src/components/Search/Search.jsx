import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../features/contacts/contactsSlice'

const Search = () => {
  const dispatch = useDispatch()

  const handleSearchValue = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <div className="flex items-center">
      <AiOutlineSearch className="absolute ml-[15px] text-[18px] text-gray-600" />
      <input
        type="text"
        className="w-[340px] sm:w-[544px] lg:w-[704px] px-[35px] py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => handleSearchValue(e)}
      />
    </div>
  )
}

export default Search
