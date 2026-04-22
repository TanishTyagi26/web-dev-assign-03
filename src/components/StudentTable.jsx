import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="table-container">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p className="no-data">No students added yet.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <StudentRow 
                key={student.id} 
                student={student} 
                onUpdateScore={onUpdateScore} 
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;