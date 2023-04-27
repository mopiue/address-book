import AddButton from '../AddButton/AddButton'
function BookList({ onClickFunc, children }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full mt-[15px]">
      {children}
      <AddButton onClickFunc={onClickFunc} />
    </div>
  )
}

export default BookList
