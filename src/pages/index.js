import React from 'react';
import Tasks from '../components/Tasks';
import StudentsList from '../components/StudentsList';
import StudentsScore from '../components/StudentsScore';


export default () => (
    <div>
        <Tasks />
        <div>
            <StudentsList/>
            <StudentsScore />
        </div>
    </div>
)
