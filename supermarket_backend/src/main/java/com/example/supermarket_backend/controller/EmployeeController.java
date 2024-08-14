package com.example.supermarket_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.supermarket_backend.Model.Employee;
import com.example.supermarket_backend.service.EmployeeServices;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@RestController
public class EmployeeController {

    @Autowired 
    EmployeeServices employeeServices;
    
    @PostMapping("/supermarket/postEmployee")
    public Employee postMethodName(@RequestBody Employee e) {
        
      return employeeServices.saveEmployeeDetails(e);
    }

    @GetMapping("/supermarket/getEmployee")
    public List<Employee> getEmployeeDetails() {
        return employeeServices.getEmployeeDetails();
    }
    
    @PutMapping("/supermarket/updateEmployee/{id}")
    public Employee updateEmployee(@PathVariable int id,@RequestBody Employee employee)
    {
        return employeeServices.updateEmployee(id,employee);
    }
    @DeleteMapping("/supermarket/deleteEmployee/{employeeId}")
    public void deleteEmployeeById(@PathVariable ("employeeId") int id)
    {
        employeeServices.deleteEmployeeById(id);
    }

}
