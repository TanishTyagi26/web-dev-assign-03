import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') {
      alert('Please provide both name and score.');
      return;
    }
    
    // Add student
    onAddStudent({
      id: Date.now(),
      name: name,
      score: Number(score)
    });

    // Clear form
    setName('');
    setScore('');
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Score:</label>
          <input 
            type="number" 
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Enter score"
            min="0"
            max="100"
          />
        </div>
        <button type="submit" className="add-btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;