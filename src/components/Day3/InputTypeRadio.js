import React, { useState } from 'react';

const InputTypeRadio = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
    // Perform further actions with the selected option
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="option"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="option"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="option"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTypeRadio;
