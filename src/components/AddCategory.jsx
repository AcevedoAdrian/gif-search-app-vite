import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [intputValue, setIntputValue] = useState("");
  
  const handleInputChange = ({ target }) => {
    setIntputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(intputValue.trim().length <= 1 ) return;
    // onCategories(categories =>( [...categories, intputValue] ));
    onNewCategory(intputValue.trim());
    setIntputValue('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar giff"
        value={intputValue}
        onChange={(e) => handleInputChange(e)}
      />
    </form>
  );
};
