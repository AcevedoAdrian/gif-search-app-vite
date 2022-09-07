import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifItem } from './GifItem';

export const GifGried = ({category}) => {

 const {images , isLoading} = useFetchGifs(category);

  return (
    <>
    {
      isLoading && <p>Cargando</p>
    }
      <h3>{category}</h3>
      <div className='card-grid'>
        {
          images.map(
            (image) =>(
              <GifItem
                key={image.id} 
                {...image}
              />
            )
          )
        }
      </div>
    </>

  )
}

