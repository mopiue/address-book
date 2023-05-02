function withContactModal(WrappedComponent) {
  return (props) => {
    if (!props.show) return null
    return (
      <div
        onClick={props.onClose}
        className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[380px] sm:w-[500px] bg-[#0f172a] rounded-lg border-[2px] border-[#353f4f]"
        >
          <WrappedComponent {...props} />
        </div>
      </div>
    )
  }
}

export default withContactModal
