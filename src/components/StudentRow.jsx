import React, { useState } from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newScore, setNewScore] = useState(student.score);

  const handleUpdate = () => {
    if (newScore === '') return;
    onUpdateScore(student.id, Number(newScore));
    setIsEditing(false);
  };

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        {isEditing ? (
          <div className="edit-score-container">
            <input 
              type="number" 
              value={newScore}
              onChange={(e) => setNewScore(e.target.value)}
              className="edit-input"
              min="0"
              max="100"
            />
            <button onClick={handleUpdate} className="save-btn">Save</button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
          </div>
        ) : (
          <div className="score-display">
            <span>{student.score}</span>
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          </div>
        )}
      </td>
      <td>
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;