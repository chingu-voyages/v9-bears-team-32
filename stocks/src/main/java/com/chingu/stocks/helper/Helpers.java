package com.chingu.stocks.helper;

import com.chingu.stocks.dao.UserDAO;
import com.chingu.stocks.dto.UserDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class Helpers {
	public static String convertJsonToString(InputStream body) {
		BufferedReader br = new BufferedReader( new InputStreamReader(body));
		String json = "";
		
		if(br != null) {
			try {
				json = br.readLine();
			} catch(IOException e) {
				e.printStackTrace();
			}
		}
		
		return json;
	}
	public static UserDTO getUserDetails(String username, UserDAO userDao) throws JsonProcessingException {
		UserDTO userDto = new UserDTO(userDao, username);
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.writeValueAsString(userDto);
		return userDto;
	}
}
