import React, { useState } from 'react';

const InputTypeCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checkbox value:', isChecked);
    // Perform further actions with the checkbox value
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="checkbox-input">
          <input
            type="checkbox"
            id="checkbox-input"
            checked={isChecked}
            onChange={handleChange}
          />
          Checkbox
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTypeCheckbox;
