import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className="flex items-center">
      <AiOutlineSearch className="absolute mx-3 text-[18px]" />
      <input
        type="text"
        className="w-full pr-10 pl-8 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}

export default Search
