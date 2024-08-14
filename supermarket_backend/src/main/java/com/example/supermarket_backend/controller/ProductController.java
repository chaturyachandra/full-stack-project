package com.example.supermarket_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.supermarket_backend.Model.Product;
import com.example.supermarket_backend.service.CartServices;
import com.example.supermarket_backend.service.ProductServices;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class ProductController {

    @Autowired
    ProductServices productService;
    @Autowired
    CartServices cartService;

    @PostMapping("/supermarket/postProduct")
    public Product postProduct(@RequestBody Product product ) {
        return productService.saveProductDetails(product);
    }

    @GetMapping("/supermarket/getProduct")
    public List<Product>getProductDetails()
    {
        return productService.getProductDetails();
    }
    
    @PutMapping("/supermarket/updateProduct/{id}")
    public Product updateProduct(@PathVariable int id,@RequestBody Product product)
    {
        return productService.updateProduct(id,product);
    }
    @DeleteMapping("/supermarket/deleteProduct/{id}")
    public void deleteProductById(@PathVariable int id)
    {
        productService.deleteProductById(id);
    }
    // @PutMapping("/api/users/{userId}/cart")
    // public void updateCartQuantity(@PathVariable int userId, @RequestBody CartUpdateRequest request) {
    //     cartService.updateCartQuantity(userId, request.getProductId(), request.getQuantity());
    // }
}
