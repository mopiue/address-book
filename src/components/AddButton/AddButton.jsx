function AddButton({ onAddClick }) {
  return (
    <span
      onClick={onAddClick}
      className="text-3xl cursor-pointer w-10 inline-block text-center text-[#94a3b8]"
    >
      +
    </span>
  )
}

export default AddButton
