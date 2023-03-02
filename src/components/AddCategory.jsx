import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('Search')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const eventVal = inputValue.trim();
    if ( eventVal.length <= 1) return;

   // setCategories( categories => [ inputValue, ...categories ])
    setInputValue('');
    onNewCategory(eventVal)
  }
  
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
