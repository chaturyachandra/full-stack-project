package com.example.supermarket_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.supermarket_backend.Model.Cart;
import com.example.supermarket_backend.Model.Product;
import com.example.supermarket_backend.repository.CartRepo;

@Service

public class CartServices {

    @Autowired
    public CartRepo cartRepo;
 
    //posting
    public Cart saveCartDetails(Cart cart) {
       return cartRepo.save(cart);
    }
  
    //get cart

    public List<Cart> getCartDetails()
    {
        return cartRepo.findAll();
    }

    //delete cart

    public void deleteCartById(int userId)
    {
        cartRepo.deleteById(userId);
    }

    //delete all cart
    public void deleteCartAll()
    {
        cartRepo.deleteAll();
    }

    //update cart
    public Cart updateCart(int id,int quantity ,Product product)
    {
        Cart cart=cartRepo.findById(id);
        for(Product p : cart.getProductList())
        {
            if(p.getProductId() == product.getProductId())
            {
                int newQuantity=p.getProductQuantity()+ quantity;
                p.setProductQuantity(newQuantity);
                return cartRepo.save(cart);
            }
        }
        product.setProductQuantity(quantity);
        cart.getProductList().add(product);
        return cartRepo.save(cart);
    }
}
