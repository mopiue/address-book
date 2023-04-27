import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className="flex items-center">
      <AiOutlineSearch className="absolute ml-[15px] text-[18px] text-gray-600" />
      <input
        type="text"
        className="w-[440px] px-[35px] py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}

export default Search
