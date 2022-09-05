import { getGif } from '../helpers/getGif';



const GifGried = ({category}) => {

  getGif(category);
  return (
  <li>{category}</li>
  )
}

export default GifGried