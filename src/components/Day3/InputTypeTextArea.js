

import React, { useState } from 'react';

const InputTypeTextArea = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    // Perform further actions with the submitted value
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textarea-input">Textarea Input:</label>
        <textarea
          id="textarea-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTypeTextArea;
