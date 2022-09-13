import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruevas en el Hook useFetchGifs.js', () => { 
  
  test('Debe de regresar el estado inicial', () => { 
    const {result} = renderHook(()=> useFetchGifs('one punch'));
    const {images, isLoading} = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => { 
    const {result} = renderHook(()=> useFetchGifs('one punch'));
    await waitFor(
      // Espera que images sea mayo a 0, cuando es asi deja de esperar el waitFor
      ()=> expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout:1000
      }
    );

    const {images, isLoading} = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })
 })