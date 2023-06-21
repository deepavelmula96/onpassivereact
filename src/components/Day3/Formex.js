import React, { useState } from 'react';

const Formex = () => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        profession: '',
        languages: "",
        // Add a new variable for checkboxes
        interests: [],
    });

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        profession,
        languages,
        interests,
    } = contact;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (checked) {
                setContact((prevContact) => ({
                    ...prevContact,
                    [name]: [...prevContact[name], value],
                }));
            } else {
                setContact((prevContact) => ({
                    ...prevContact,
                    [name]: prevContact[name].filter((item) => item !== value),
                }));
            }
        } else {
            setContact((prevContact) => ({
                ...prevContact,
                [name]: value,
            }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(firstName===""){
            alert('first name is required')
        }
        else{}
        if (password === confirmPassword) {
            console.log(contact);
        } else {
            alert('Password and confirm password need to be the same');
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="firstName" value={firstName} onChange={handleChange}
                 placeholder="Enter firstName" /><br />
                <input type="text" name="lastName" value={lastName} onChange={handleChange}
                 placeholder="Enter last Name" /><br />
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter email" /><br />
                <input
                    type="radio"
                    name="profession"
                    value="software Engineer"
                    checked={profession === 'software Engineer'}
                    onChange={handleChange}
                />
                <label>Software Engineer</label>
                <input
                    type="radio"
                    name="profession"
                    value="Student"
                    checked={profession === 'Student'}
                    onChange={handleChange}
                />
                <label>Student</label><br />
                <label htmlFor="dropdown">Select Technology:</label>
                <select id="dropdown" name="languages" value={languages} 
                onChange={handleChange}>
                    <option value="">Choose a Technology</option>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select><br />
                <label>Select Interests:</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="interests"
                            value="Sports"
                            checked={interests.includes('Sports')}
                            onChange={handleChange}
                        />
                        Sports
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="interests"
                            value="Reading"
                            checked={interests.includes('Reading')}
                            onChange={handleChange}
                        />
                        Reading
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="interests"
                            value="Music"
                            checked={interests.includes('Music')}
                            onChange={handleChange}
                        />
                        Music
                    </label>
                </div>
                <input type="password" name="password" value={password} onChange={handleChange} 
                placeholder="Enter password" /><br />
                <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    placeholder="Enter confirm password"
                /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Formex;
