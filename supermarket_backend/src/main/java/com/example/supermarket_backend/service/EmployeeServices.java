package com.example.supermarket_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.supermarket_backend.Model.Employee;
import com.example.supermarket_backend.repository.EmployeeRepo;

@Service
public class EmployeeServices {
    @Autowired
    private EmployeeRepo employeeRepo;
    
    //posting
    public Employee saveEmployeeDetails(Employee e)
    {
        return employeeRepo.save(e);
    }
    

    //getting
    public List<Employee>getEmployeeDetails()
    {
        return employeeRepo.findAll();
    }

    //delete
    public void deleteEmployeeById(int id)
    {
        employeeRepo.deleteById(id);
    }

    //put
    public Employee updateEmployee(int id, Employee employee)
    {
        return employeeRepo.save(employee);
    }
}
