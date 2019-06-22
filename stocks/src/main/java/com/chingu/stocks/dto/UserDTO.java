package com.chingu.stocks.dto;

import com.chingu.stocks.dao.UserDAO;
import com.chingu.stocks.entity.User;
import org.springframework.beans.factory.annotation.Autowired;

public class UserDTO {

  UserDAO userDao;
  private User user;

  @Autowired
  public UserDTO(UserDAO theUserDao, String username) {
    userDao = theUserDao;
    this.user = userDao.findByUsername(username);
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}
