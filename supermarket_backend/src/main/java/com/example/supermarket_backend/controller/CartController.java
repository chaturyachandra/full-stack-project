package com.example.supermarket_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.supermarket_backend.Model.Cart;
import com.example.supermarket_backend.Model.Product;
import com.example.supermarket_backend.service.CartServices;
import com.example.supermarket_backend.service.UserService;

@RestController
public class CartController {

    @Autowired
    CartServices cartServices;
    @Autowired
    UserService userService;


    @PostMapping("/supermarket/postCart")
    public Cart saveCartDetails(@RequestBody Cart cart) {
        return cartServices.saveCartDetails(cart);
    }

    @GetMapping("/supermarket/getCart")
    public List<Cart> getCartDetails()
    {
        return cartServices.getCartDetails();
    }

    @DeleteMapping("/supermarket/clearCart/{userId}")
    public void deleteCartAll(@PathVariable int userId) {
        // Step 1: Set the cart_id in the user table to NULL
        // userService.clearUserCart(userId);
    
        // Step 2: Delete the cart
        cartServices.deleteCartById(userId);
    }
    
    @DeleteMapping("/supermarket/clearCart")
    public void deleteCartAll()
    {
        cartServices.deleteCartAll();
    }
    @PutMapping("/supermarket/updateCart/{id}/{quantity}")
    public Cart updateCart(@PathVariable int id,@PathVariable int quantity ,@RequestBody Product p)
    {
        return cartServices.updateCart(id, quantity,p);
    }

}
