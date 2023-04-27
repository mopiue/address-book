function ModalAdd({ onClose, show, children }) {
  if (!show) return null

  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] bg-white rounded-lg border-[1px] border-slate-400"
      >
        <div className="p-[10px]">
          <div className="font-bold text-lg">My Address Book / New Contact</div>
        </div>
        <div className="p-[10px] border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300">
          {children}
        </div>
        <div className="p-[10px] flex justify-end">
          <button
            onClick={onClose}
            className="border-[1px] border-slate-600 rounded-md w-1/6 h-[28px] mr-[30px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalAdd
