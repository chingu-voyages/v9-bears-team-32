package com.chingu.stocks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.chingu.stocks.dao.UserDAO;
import com.chingu.stocks.entity.User;

@Controller
public class MainController {

  @GetMapping({"/", "/login", "/register", "/dashboard"})
  public String homePage() {
    return "index";
  }

}
