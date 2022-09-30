import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import TopAdmin from './TopAdmin';
import TableAdmin from './TableAdmin';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import { employeesData } from '../../employers';

const Board = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees_data'));
    if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel it!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Employee deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
        setEmployees(employeesCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <TopAdmin
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <TableAdmin
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <AddEmployee
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <EditEmployee
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Board;