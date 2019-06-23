package com.chingu.stocks.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.chingu.stocks.dao.UserDAO;
import com.chingu.stocks.dto.UserDTO;
import com.chingu.stocks.entity.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chingu.stocks.helper.Helpers;

@RestController
@RequestMapping("/api")
public class ApiController {

  UserDAO userDao;

  @Autowired
  public ApiController(UserDAO theUserDao) {
    userDao = theUserDao;
  }

  @PostMapping("/register-user")
  public void register(HttpServletRequest request, HttpServletResponse response) throws IOException, JSONException {
    String payloadString = Helpers.convertJsonToString( request.getInputStream() );
    JSONObject payloadJson = new JSONObject(payloadString);

    User user = new User(payloadJson.getString("username"),
        payloadJson.getString("password"),
        payloadJson.getString("displayName"),
        payloadJson.getString("email")
    );

    userDao.saveUser(user);

    request.getSession().setAttribute("userDetails", userDao);

    // @TODO Create appropriate response based on successful/failed login
    JSONObject responsePayload = new JSONObject();
    responsePayload.put("status", "success");

    PrintWriter out = response.getWriter();
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    out.print(responsePayload);
    out.flush();;

  }

  @GetMapping("/user-details")
  public UserDTO userDetails(HttpServletRequest request, Authentication authentication) throws JsonProcessingException {
    UserDTO userDto = new UserDTO(userDao, authentication.getName());
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.writeValueAsString(userDto);
    return userDto;
  }
}