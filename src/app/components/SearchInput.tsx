import React from 'react';
import { PlusCircle } from 'phosphor-react';

export const SearchInput = () => {
  return (
    <div className="container-input">
      <input type="text" name="" id="" placeholder="Adicione uma nova tarefa" />
      <button className="btn-input" type="button">
        Criar
        <span>
          <PlusCircle size={20} />
        </span>
      </button>
    </div>
  );
};

export default SearchInput;
