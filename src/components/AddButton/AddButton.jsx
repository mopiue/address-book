function AddButton({ onAddClick }) {
  return (
    <span
      onClick={onAddClick}
      className="text-3xl cursor-pointer w-10 inline-block text-center"
    >
      +
    </span>
  )
}

export default AddButton
