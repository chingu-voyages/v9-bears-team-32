package com.chingu.stocks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.chingu.stocks.dao.UserDAO;
import com.chingu.stocks.entity.User;

@Controller
public class MainController {

  UserDAO userDao;

  @Autowired
  public MainController(UserDAO theUserDao) {
    userDao = theUserDao;
  }

  @GetMapping("/")
  public String homePage() {

    User user = new User("test","testpass","display","emailtest",100,100);
    userDao.saveUser(user);

    return "index";
  }
}
