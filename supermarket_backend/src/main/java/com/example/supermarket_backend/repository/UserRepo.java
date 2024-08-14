package com.example.supermarket_backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.supermarket_backend.Model.UserModel;


public interface UserRepo extends JpaRepository<UserModel, Integer> {
    public UserModel findByUsername(String username);
    public UserModel findByEmail(String email);
    boolean existsByEmail(String email);

    // UserModel findById(int id);
    // Optional<UserModel> findByEmailAndPassword(String email, String password);
}

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import com.example.supermarket_backend.Model.UserModel;



// @Repository
// public interface UserRepo extends JpaRepository<UserModel,Integer>{

//     UserModel findById(Long userId);

//     UserModel findByEmail(String email);
//     public UserModel findByUsername(String name);

// }
