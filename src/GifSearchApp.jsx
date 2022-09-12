import { useState } from 'react';

import { AddCategory, GifGrid} from './components';

export const GifSearchApp = () => {

  // ! Esto es un erro no se debe de hacer
  // if (true) {
  //   const [categories, setCategories] = useState(["One Piece", "Alf"]);
  // }
  const [categories, setCategories] = useState(["one piece"]);

  const handleAddCategory = (newCatergory) => {

    // Seteo tradicional
    // setCategories([...categories]);

    // ? Otra forma de agregar elementos al arreglo del state usando callBack
    // setCategories(callBackCategories => [...callBackCategories, 'Dragon Ball'])

    if(categories.includes(newCatergory)) return;
    setCategories([newCatergory ]);
    // console.log(categories);

  };
  return (
    <>
      <h1>Gif Search App</h1>
      <hr></hr>
      <AddCategory  
        // onCategories={setCategories}
        onNewCategory = {(value => handleAddCategory(value))}
      />

      {/* <button 
        onClick={handleAddCategory}
      >
        Agregar
      </button> */}

      {categories.map((category) => ( 
          <GifGrid 
               key={category}
              category={category} />
          )
        )
      }
    </>
  );
};

