package com.example.supermarket_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.supermarket_backend.Model.Cart;

public interface CartRepo extends JpaRepository<Cart,Integer> {
    
    Cart findById(int id);
}
