import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('beginner');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(subject, level);
  };

  return (
    <section id="input-form">
      <h2>Enter Your Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject: </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label htmlFor="Grade">Level: </label>
        <select
          id="level"
          name="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
        >
          <option value="Pre-K">Pre-K</option>
          <option value="1st Grade">1st Grade</option>
          <option value="2nd Grade">2nd Grade</option>
          <option value="3rd Grade">3rd Grade</option>
          <option value="4th Grade">4th Grade</option>
          <option value="5th Grade">5th Grade</option>
        </select>

        <button type="submit">Get Recommendations</button>
      </form>
    </section>
  );
}

export default Form;
