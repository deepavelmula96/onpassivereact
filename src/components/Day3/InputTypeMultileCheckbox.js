import React, { useState } from 'react';

const InputTypeMultileCheckbox = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedLanguages([...selectedLanguages, value]);
    } else {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected languages:', selectedLanguages);
    // Perform further actions with the selected languages
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="javascript"
            value="JavaScript"
            checked={selectedLanguages.includes('JavaScript')}
            onChange={handleLanguageChange}
          />
          JavaScript
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="python"
            value="Python"
            checked={selectedLanguages.includes('Python')}
            onChange={handleLanguageChange}
          />
          Python
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="java"
            value="Java"
            checked={selectedLanguages.includes('Java')}
            onChange={handleLanguageChange}
          />
          Java
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTypeMultileCheckbox;
