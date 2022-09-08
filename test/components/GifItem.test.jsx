import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba sobre el componente <GifItem />',()=>{

  const title = 'Lufy';
  const url   = 'https://one-piece/lufy.jpg'
  test('Evaluacion del snapshot', ()=>{
    const {container} = render(<GifItem  title={title} url={url}/>);
    expect(container).toMatchSnapshot();
    
  });

  test('debe de mostrar la imagen con el URL y en alt indicado', ()=>{
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url)
    const {src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el titulo en el componente',()=>{
     render(<GifItem title={title} url={url} />);
     expect(screen.getByText(title)).toBeTruthy();
  });
});