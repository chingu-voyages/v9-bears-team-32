package com.chingu.stocks.dao;

import javax.persistence.EntityManager;

import com.chingu.stocks.entity.User;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class UserDAO {
  private EntityManager entityManager;

  public UserDAO (EntityManager theEntityManager) {
    entityManager = theEntityManager;
  }

  @Transactional
  public void saveUser(User user) {
    Session currentSession = entityManager.unwrap(Session.class);
    currentSession.saveOrUpdate(user);
  }
}
