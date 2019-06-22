package com.chingu.stocks.dao;

import javax.persistence.EntityManager;

import com.chingu.stocks.entity.User;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class UserDAO implements UserDAOInterface {
  private EntityManager entityManager;

  public UserDAO (EntityManager theEntityManager) {
    entityManager = theEntityManager;
  }
  
  @Override
  @Transactional
  public void saveUser(User user) {
    Session currentSession = entityManager.unwrap(Session.class);
    currentSession.saveOrUpdate(user);
  }

  @Override
  @Transactional
  public User findByUsername(String username) {
    Session currentSession = entityManager.unwrap(Session.class);
    User userResult = currentSession.get(User.class, username);

    return userResult;
  }
}
