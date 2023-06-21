import React, { useState } from 'react';

const InputTypeText = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    // Perform further actions with t bhe submitted value
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Text Input:</label>
        <input
          type="text"
          id="text-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTypeText;

