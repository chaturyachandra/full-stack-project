package com.example.supermarket_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.supermarket_backend.Model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer>
 {

}
