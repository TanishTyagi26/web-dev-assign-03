import React, { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
    const [students, setStudents] = useState([
    { id: 1, name: 'Saksham', score: 85 },
    { id: 2, name: 'Deepika', score: 35 },
    { id: 3, name: 'Anshika', score: 90 },
    { id: 4, name: 'Anik Pawar', score: 72 },
    { id: 5, name: 'Aryan Tiwari', score: 45 },
    { id: 6, name: 'Ayush ', score: 28 },
    { id: 7, name: 'Tanish Tyagi', score: 95 }
    ]);

    const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    };

    const handleUpdateScore = (id, newScore) => {
    setStudents(students.map(student => 
        student.id === id ? { ...student, score: newScore } : student
    ));
    };

    return (
    <div className="app">
        <Header />
        <main className="main-content">
        <AddStudentForm onAddStudent={handleAddStudent} />
        <StudentTable 
            students={students} 
            onUpdateScore={handleUpdateScore} 
        />
        </main>
    </div>
    );
}

export default App;