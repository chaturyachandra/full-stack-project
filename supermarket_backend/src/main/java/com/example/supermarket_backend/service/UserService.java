package com.example.supermarket_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.supermarket_backend.Model.UserModel;
import com.example.supermarket_backend.repository.UserRepo;

import java.util.List;
import java.util.Optional;



@Service
public class UserService implements UserDetailsService{
    @Autowired
    private UserRepo userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        UserModel user = userRepository.findByUsername(email);
        if(user!=null)
        {
            var springUser = User.withUsername(user.getUsername())
                                 .password(user.getPassword())
                                 .roles(user.getRole())
                                 .build();
            
            return springUser;
        }
        return null;
    }
    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(int id) {
        return userRepository.findById(id);
    }

    public boolean userExists(String email) {
        return userRepository.existsByEmail(email);
    }
    public UserModel clearCart(int id)
    {
        Optional<UserModel> user = userRepository.findById(id);
       UserModel um = user.get();
       um.getCart().getProductList().clear();
       return userRepository.save(um);
    }

//     public UserModel validateUser(String email, String password) {
//         return userRepository.findByEmailAndPassword(email, password).orElse(null);
//     }
}
