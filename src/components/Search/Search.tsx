import { type ReactElement } from 'react'

import { IoSearch } from "react-icons/io5";

interface SearchProps {
  handleSearch: () => void
  setTitle: (title: string) => void
  title: string
  isLoading: boolean
}

function Search({handleSearch, setTitle, title, isLoading}: SearchProps): ReactElement {
  return (
  <div className='w-full flex gap-4'>
    <input 
      type="text" className='bg-white rounded-lg w-[400px] p-4 text-black outline-0' 
      placeholder='Digite o nome de uma música'
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      />
    {isLoading ? (
      <div className='h-[56px] w-20 animate-pulse bg-[#6936F5] rounded-lg' />
      ) : (
      <button className='outline-none w-20 flex items-center justify-center' onClick={handleSearch}>
        <IoSearch size={32} color="white"/>
      </button>
    )}
    
  </div>
  )
}

export default Search
