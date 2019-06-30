package com.chingu.stocks.dao;

import com.chingu.stocks.entity.Stock;
import com.chingu.stocks.entity.User;

public interface UserDAOInterface {
  public void saveUser(User user);

  public User findByUsername(String username);

  public void addStock(String username, Stock stock);
}
