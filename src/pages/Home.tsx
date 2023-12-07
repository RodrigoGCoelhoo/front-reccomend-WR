import { type ReactElement, useState } from 'react'
import axios from 'axios'
import Search from '../components/Search/Search'

import logo from '../assets/logo-color.svg'
import Track from '../components/Track/Track'

function Home(): ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [items, setItems] = useState([])

  function handleSearch(): void {
    setIsLoading(true)
    axios.post('https://04wgolgyf5.execute-api.us-east-2.amazonaws.com', 
    { title: title },
    { headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }}
    )
    .then(response => {
      const arr = eval(response.data.prediction)
      setItems(arr)
    })
    .finally(() => {
      setIsLoading(false)
    });
  }

  return (
  <div className='w-full flex flex-col items-center gap-4 h-full'>
    <img src={logo} className='w-[400px] h-[150px] bg-cover object-cover'/>
    <Search 
      handleSearch={handleSearch} 
      setTitle={setTitle} 
      title={title}
      isLoading={isLoading}
      />

    {items.length > 0 ? (
      <div className='flex flex-col w-full gap-2'>
        {items.map((item, index) => {

          return(
            <Track name={item} pos={(index + 1).toString()} isLoading={isLoading} key={index}/>
          )
        })}
      </div>
    ) : (<div className='h-40'/>)}
  </div>
  )
}

export default Home
