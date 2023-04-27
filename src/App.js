import React, { useState } from 'react'
import Search from './components/Search/Search'
import BookList from './components/BookList/BookList'
import ListItem from './components/ListItem/ListItem'
import ModalAdd from './components/ModalAdd/ModalAdd'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col items-center mx-auto w-[744px] p-5 border-2 border-t-0 rounded-[5px] border-gray-300">
      <h1 className="font-bold text-[28px] mb-[5px]">My Address Book</h1>
      <Search />
      <BookList onClickFunc={() => setShow(true)}>
        <ListItem />
        <ListItem />
        <ListItem />
      </BookList>
      <ModalAdd onClose={() => setShow(false)} show={show}>
        test
      </ModalAdd>
    </div>
  )
}

export default App
