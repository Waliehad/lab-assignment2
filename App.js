import React from 'react';
import PropTypes from 'prop-types';

function LastSemester(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <ul>
        {props.courses.map((course, index) => (
          <li key={index}>
            {course.name}
            <button onClick={() => alert(`GPA: ${course.gpa}`)}>
              Show GPA
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

LastSemester.propTypes = {
  name: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gpa: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function App() {
  const courses = [
    { name: 'DSA', gpa: 2.0 },
    { name: 'SDA', gpa: 2.1 },
    { name: 'SRE', gpa: 1.3 },
    { name: 'SQA', gpa: 0.7 },
    { name: 'Maths', gpa: 1.7 },
  ];

  return (
    <div className="App">
      <LastSemester name="Soban Khan" courses={courses} />
    </div>
  );
}

export default App;
