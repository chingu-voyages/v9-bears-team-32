package com.chingu.stocks.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.chingu.stocks.dao.UserDAO;
import com.chingu.stocks.dto.UserDTO;
import com.chingu.stocks.entity.Stock;
import com.chingu.stocks.entity.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.id.uuid.Helper;
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
    return Helpers.getUserDetails(authentication.getName(), userDao);
  }

  @PostMapping("/search-stock")
  public String userDetails(HttpServletRequest request) throws IOException, JSONException {
    String payloadString = Helpers.convertJsonToString( request.getInputStream() );
    JSONObject payloadJson = new JSONObject(payloadString);


    if(payloadJson != null) {
      String stockSymbol = payloadJson.getString("symbol");
      String token = System.getenv("SEARCH_TOKEN");
      String url = "https://cloud.iexapis.com/stable/stock/"+stockSymbol+"/quote?token="+token;

      URL obj = new URL(url);
      HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
      String stringifiedResponse = Helpers.convertJsonToString( connection.getInputStream() );
      return stringifiedResponse;
    } else {
      return null;
    }
  }

  @PostMapping("/purchase-stock")
  public UserDTO purchaseStock(HttpServletRequest request, Authentication authentication) throws IOException, JSONException {
    String payloadString = Helpers.convertJsonToString(request.getInputStream());
    JSONObject payloadJson = new JSONObject(payloadString);

    if(payloadJson != null) {
      // todo. Add type checks for FE data passed, get price from BE and check against the FE, add date
      DateFormat dateNow = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
      Stock stock = new Stock(authentication.getName(), payloadJson.getString("stockSymbol"), payloadJson.getDouble("expectedPrice"), null, payloadJson.getInt("quantity"));
      userDao.addStock(authentication.getName(), stock);
//      return Helpers.getUserDetails(authentication.getName(), userDao);
    }
    return null;
  }
}