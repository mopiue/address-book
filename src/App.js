import React, { useState } from 'react'
import Search from './components/Search/Search'
import BookList from './components/BookList/BookList'
import ModalAdd from './components/ModalAdd/ModalAdd'
import withContactModal from './hoc/withContactModal'
import ModalEdit from './components/ModalEdit/ModalEdit'

const ModalAddWithHOC = withContactModal(ModalAdd)
const ModalEditWithHOC = withContactModal(ModalEdit)

function App() {
  const [modalAddShow, setModalAddShow] = useState(false)
  const [modalEditShow, setModalEditShow] = useState(false)

  return (
    <div className="flex flex-col items-center mx-auto w-[380px] sm:w-[584px] lg:w-[744px] p-5">
      <h1 className="font-bold text-[28px] mb-[5px] text-white">
        My Address Book
      </h1>
      <Search />
      <BookList
        onAddClick={() => setModalAddShow(true)}
        onEditClick={() => setModalEditShow(true)}
      />
      <ModalAddWithHOC
        onClose={() => setModalAddShow(false)}
        show={modalAddShow}
      />
      <ModalEditWithHOC
        onClose={() => setModalEditShow(false)}
        show={modalEditShow}
      />
    </div>
  )
}

export default App
