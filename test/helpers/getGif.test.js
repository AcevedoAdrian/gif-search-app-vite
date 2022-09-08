import { getGif } from "../../src/helpers/getGif";

describe('Pruebas en getgifs()', ()=>{

  test('debe de retornar un arregle de gif', async()=>{

    const gifs= await getGif('One Piece');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})