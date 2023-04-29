import React, { useEffect, useState } from 'react'
import Search from './components/Search/Search'
import BookList from './components/BookList/BookList'
import ModalAdd from './components/ModalAdd/ModalAdd'
import withContactModal from './hoc/withContactModal'

const ModalAddWithHOC = withContactModal(ModalAdd)

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col items-center mx-auto w-[744px] p-5 border-2 border-t-0 rounded-b-[5px] border-gray-300">
      <h1 className="font-bold text-[28px] mb-[5px]">My Address Book</h1>
      <Search />
      <BookList onClickFunc={() => setShow(true)} />
      <ModalAddWithHOC onClose={() => setShow(false)} show={show} />
    </div>
  )
}

export default App
