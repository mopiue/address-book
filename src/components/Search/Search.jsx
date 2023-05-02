import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../features/contacts/contactsSlice'

const Search = () => {
  const dispatch = useDispatch()

  const handleSearchValue = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <div className="flex items-center relative">
      <BiSearch className="absolute ml-[15px] text-[18px] text-[#94a3b8]" />
      <input
        type="text"
        className="w-[340px] sm:w-[544px] lg:w-[704px] px-[40px] h-[40px] rounded-lg bg-[#1e293b] text-[#94a3b8] focus:outline-none hover:bg-[#334155] focus:bg-[#334155]"
        onChange={(e) => handleSearchValue(e)}
      />
    </div>
  )
}

export default Search
