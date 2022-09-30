import React, { useState } from 'react';
import Swal from 'sweetalert2';

const EditEmployee = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = e => {
    e.preventDefault();
    const employee = {
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

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container-2">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
       
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
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div className="parent-input">
          <input className="inputSub" type="submit" value="Update" />
          <input
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;