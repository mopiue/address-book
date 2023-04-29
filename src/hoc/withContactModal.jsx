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
          className="w-[500px] bg-white rounded-lg border-[1px] border-slate-400"
        >
          <WrappedComponent {...props} />
        </div>
      </div>
    )
  }
}

export default withContactModal
