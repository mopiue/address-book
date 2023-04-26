import React from 'react'
import Search from './components/Search/Search'

function App() {
  return (
    <div className="flex flex-col mx-auto w-[744px] p-5 border-2 border-sky-500">
      <h1 className="font-bold text-[28px]">My Address Book</h1>
      <Search />
    </div>
  )
}

export default App
