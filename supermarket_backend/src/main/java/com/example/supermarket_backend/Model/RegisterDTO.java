package com.example.supermarket_backend.Model;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class RegisterDTO {
    //    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
    @NotEmpty
    private String username;

    @NotEmpty
    private String email;
    @NotEmpty
    @Size(min = 6, message = "Minimum Password length is 6 characters")
    private String password;
    private String role;
    
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Cart setCart(){
        return new Cart();
    }
    
}
