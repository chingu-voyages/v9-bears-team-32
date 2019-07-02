package com.chingu.stocks.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.text.DateFormat;

@Entity
@Table(name="stock")
public class Stock {
  @Id
  @Column(name="id")
  private int id;

  @Column(name="username")
  private String username;

  @Column(name="symbol")
  private String symbol;

  @Column(name="purchase_price")
  private double purchasePrice;

  @Column(name="purchase_date")
  private DateFormat purchaseDate;

  @Column(name="quantity")
  private int quantity;

  @ManyToOne
  @JoinColumn(name="user")
  @JsonBackReference // https://stackoverflow.com/questions/3325387/infinite-recursion-with-jackson-json-and-hibernate-jpa-issue
  private User user;

  public Stock() {}

  public Stock(String username, String symbol, double purchasePrice, DateFormat purchaseDate, int quantity) {
    this.username = username;
    this.symbol = symbol;
    this.purchasePrice = purchasePrice;
    this.purchaseDate = purchaseDate;
    this.quantity = quantity;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getSymbol() {
    return symbol;
  }

  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }

  public double getPurchasePrice() {
    return purchasePrice;
  }

  public void setPurchasePrice(double purchasePrice) {
    this.purchasePrice = purchasePrice;
  }

  public DateFormat getPurchaseDate() {
    return purchaseDate;
  }

  public void setPurchaseDate(DateFormat purchaseDate) {
    this.purchaseDate = purchaseDate;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}
