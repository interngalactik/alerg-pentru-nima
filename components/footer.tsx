import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col  items-center">
        <div className='flex flex-row justify-center items center'>
            <p>with <FavoriteIcon className='text-red-700' fontSize='small'></FavoriteIcon> for</p>
            <a href="https://sanctuarnima.ro" target='_blank' className="mx-1 font-bold text-lime-500 hover:underline">
              sanctuarnima.ro
            </a>
          </div>
          <div className='flex flex-row justify-center items center'>
            <p>powered by</p>
            <a href="https://naturaumanafilm.ro" target='_blank' className="mx-1 font-bold text-yellow-400 hover:underline">
              naturaumanafilm.ro
            </a>
          </div>
          <div className='flex flex-row justify-center items center'>
            <p>developed by</p>
            <a href="mailto:eduard@nistru.ro" className="mx-1 font-bold hover:underline text-yellow-100">
              eduard@nistru.ro
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
