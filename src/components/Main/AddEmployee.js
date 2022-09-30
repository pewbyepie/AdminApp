import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddEmployee = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    employees.push(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Employee added!',
      text: `${firstName} ${lastName}'s has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container-3">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <input
          id="firstName"
          placeholder='First Name'
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          id="lastName"
          placeholder='Last Name'
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          id="email"
          placeholder='Email'
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          id="salary"
          placeholder='Salary'
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <input style={{ color: 'rgba(243, 236, 224, 0.712)' }}
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div className="parent-input">
          <input className="inputSub" type="submit" value="Add" />
          <input
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;