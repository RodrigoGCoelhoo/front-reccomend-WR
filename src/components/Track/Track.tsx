import { type ReactElement } from 'react'

interface TrackProps{
  pos: string
  name: string
  isLoading: boolean
}

function Track({ name, pos, isLoading }: TrackProps): ReactElement {
  // const [cover, setCover] = useState<string>('')

  // async function fetchCover(): Promise<void>{
  //   // const response = await fetch(`https://api.spotify.com/v1/search?q=${name}&type=track&market=BR&limit=1`, {
  //   //   headers: {
  //   //     Authorization: 'Bearer ' + import.meta.env.VITE_SPOTIFY_TOKEN
  //   //   }
  //   // })
  //   // const data = await response.json()
  //   // setCover(data.data[0].album.cover_medium)
  //   const client_id = '778b22cd7f7e403f90c075b85485eb99';
  //   const redirect_uri = 'spotif';
  //   const response_type = 'code';
  //   const scope = 'user-read-private user-read-email';
  //   const auth_url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`;

  //   const response = await fetch(auth_url)
  //   console.log(response)
  // }

  // useEffect(() => {
  //   void fetchCover()
  // }, [])
  if (isLoading) return (
  <div className='bg-zinc-700 rounded-lg w-full p-2 flex px-4 gap-2 h-10 animate-pulse'>
  </div>
  )
  return (
  <div className='bg-zinc-700 rounded-lg w-full p-2 flex px-4 gap-2'>
    {/* <img src={cover} className='w-full aspect-square h-20 rounded-lg'/> */}
    <span>{pos}.</span>
    <span className='text-white'>{name}</span>
  </div>
  )
}

export default Track
