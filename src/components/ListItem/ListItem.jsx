import { AiOutlineClose } from 'react-icons/ai'

function ListItem() {
  return (
    <div className="flex w-full border-2 p-[7px] bg-[#e5e5e5] justify-between px-5 items-center rounded-lg">
      <div className="flex flex-col">
        <span className="inline-block w-[max-content] text-black text-base font-bold border-b-[1px] border-dashed border-black cursor-pointer">
          Superman
        </span>
        <span className="">super-man@dc.com</span>
      </div>
      <div className="cursor-pointer">
        <AiOutlineClose />
      </div>
    </div>
  )
}

export default ListItem
