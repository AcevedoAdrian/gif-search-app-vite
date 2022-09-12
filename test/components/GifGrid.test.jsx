import { getAllByRole, render, screen} from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('prueba sobre el componente <GifGrid />', () => { 

  const category= 'gonbe'

  test('debe de mostrar el loading incialmente', ()=>{

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category}/>);
    
    expect(screen.getByText('Cargando'));
    expect(screen.getByText(category));

  });

  test('debe de mostrar items cuando se cargan las imagenes usefetchGifs', ()=>{

    const gifs= [
      {
        id:'123',
        title:'lufy',
        url:'https://localost/lufy.jpg'
      },
      {
        id:'321',
        title:'zoro',
        url:'https://localost/zoro.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category}/>);
    expect(screen.getAllByRole('img').length).toBe(2);

  })
 });