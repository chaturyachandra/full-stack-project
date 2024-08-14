package com.example.supermarket_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.supermarket_backend.Model.Product;
import com.example.supermarket_backend.repository.ProductRepo;

@Service
public class ProductServices {

    @Autowired
    public ProductRepo productRepo;

    //post product

    public Product saveProductDetails(Product product) {
        return productRepo.save(product);

    }

    //get product 

    public List<Product> getProductDetails()
    {
        return productRepo.findAll();
    }

    //delete product
    public void deleteProductById(int id)
    {
        productRepo.deleteById(id);
    }

    //update product
    public Product updateProduct(int id, Product product)
    {
        return productRepo.save(product);
    }

}
