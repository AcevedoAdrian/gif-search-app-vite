import { useState } from "react";

export const AddCategory = () => {
  const [intputValue, setIntputValue] = useState("");
  const handleInputChange = ({ target }) => {
    setIntputValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
