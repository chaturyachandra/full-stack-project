package com.example.supermarket_backend.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Data;


@Data
@Entity
public class Product {
  @Id
  public int productId;//PK
  public String productName;
  public int productPrice;
  public String productType;
  public int productQuantity;
  // public String productImage;
  
  // @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  // @JoinColumn(name = "category_id",referencedColumnName = "categoryId")
  // public Category category;


  @JsonIgnore
  @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "cart_products",joinColumns = @JoinColumn(name="product_id"),inverseJoinColumns = @JoinColumn(name="cart_id"))
    private List<Cart> carts;

  

}
