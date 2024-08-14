import React, { useState, useEffect } from 'react';
import './Employee.css';
import { getEmployeeData, postEmployeeData, deleteEmployeeData } from '../Api';

const Employee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployeeData();
        setEmployees(response.data);
        console.log("Fetching employee data");
      } catch (error) {
        console.error('Error fetching employees', error);
      }
    };
    fetchEmployees();
  }, []);

  const addEmployee = async () => {
    if (name.trim() === '' || position.trim() === '') {
      alert('Name and position cannot be empty');
      return;
    }

    try {
      const newEmployee = { name, position, salary };
      await postEmployeeData(name, position, salary);
      setEmployees([...employees, newEmployee]);
      setName('');
      setPosition('');
      setSalary('');
      alert("Employees added")
      window.location.reload();
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  const removeEmployee = async (id) => {
    try {
      await deleteEmployeeData(id);
      setEmployees(employees.filter((employee) => employee.id !== id));
      alert("Employee deleted");
      window.location.reload();
    } catch (error) {
      console.error('Error removing employee', error);
    }
  };

  return (
    <div className="employee-container">
      <h1>Employee Management</h1>
      <div className="employee-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employee-list">
        <h2>Employee List</h2>
        {employees.map((employee) => (
          <div key={employee.id} className="employee-item">
            <p>
              <strong>Name:</strong> {employee.employeeName}
            </p>
            <p>
              <strong>Position:</strong> {employee.employeePosition}  
            </p>
            <p>
              <strong>Salary:</strong> {employee.employeeSalary}
            </p>
            <button onClick={() => removeEmployee(employee.employeeId)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
