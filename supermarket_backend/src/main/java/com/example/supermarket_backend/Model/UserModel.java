package com.example.supermarket_backend.Model;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;
@Data
@Entity
public class UserModel{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
    public String username;
    public String email;
    public String password;
    public String role;
    
    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name="cart_id",referencedColumnName ="cartId")
    Cart cart;

    // public Object map(Object object) {
    //     
    //     throw new UnsupportedOperationException("Unimplemented method 'map'");
    // }
}
