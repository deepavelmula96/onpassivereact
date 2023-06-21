import React, { useState } from 'react';

const OnBlurForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    if (fieldName === 'name') {
      if (!value) {
        errorMessage = 'Name is required';
      }
    }

    if (fieldName === 'email') {
      if (!value) {
        errorMessage = 'Email is required';
      } else if (!isValidEmail(value)) {
        errorMessage = 'Invalid email address';
      }
    }

    return errorMessage;
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const errorMessage = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for any remaining errors before submitting
    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      const errorMessage = validateField(fieldName, formData[fieldName]);
      if (errorMessage) {
        newErrors[fieldName] = errorMessage;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with form submission
      console.log(formData);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name1</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default OnBlurForm;

