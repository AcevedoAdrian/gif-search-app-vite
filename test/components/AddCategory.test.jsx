import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('pruebas sobre el componente <AddCategory />',()=>{

  test('debe de cambiar el valor de la caja de texto',()=>{

    render(<AddCategory onNewCategory={ ()=>{} }/>);
    // Como el onChange del input setea un nuevo valor en State y este valor es asiganado al value del mismo input podemos hacer lo siguiente
    // Si yo disparo el onchange y mando un nuevo valor al evente y ese envento deberia establecer el value al input

    //  OBTENER LA REFERENCIA A UN INPUT
    // Este consta hora tiene el nodo html input
    const input = screen.getByRole('textbox');

    //DIPARAR UN EVENTO
    // El primer parametro el sobre que elemento (element: Element | Node | Document | Windo) queremos disparar el evento en este caso es el sobre la variable input que contien un elemento html, segundo parametro es opcional, pero en este caso es el evento que recive la funcion que eneste caso es un evento que tiene dentro tiene una propiedad target
    fireEvent.input(input, {target: {value:'Alf'}})

    // ASERCION
    // Corroboramos que el value sea igual al valor del toBe
    expect(input.value).toBe('Alf');


  });

  test('debe de llamar onNewCategory si el input tiene un valor',()=>{

    const inputValue = 'Alf';

    // jest.fn es un mock(es una simulacion de una funcion), y yo tengo el contro de esta funcion 
    const onNewCategory =jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    //  Debemos asignar un aria-label='form' para que lo detecte
    const form = screen.getByRole('form');

    fireEvent.input(input,{target: {value: inputValue}});
    fireEvent.submit(form);

    expect(input.value).toBe('');
    // que la funcion haya sido llamada
    expect(onNewCategory).toHaveBeenCalled();
    // definir la cantidad de veces queremos que sea llada.
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // definir con que valor queremos que sea llamada la funcion, en este caso con el valor del input
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);


  });
  
  test('no debe de llamar onNewCategory si el input esta vacio', () => { 
    
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory}/>)
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    // expect(onNewCategory).toBeCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

   })

});