package com.chingu.stocks.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.chingu.stocks.entity.User;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class UserDAO implements UserDAOInterface {
  // define field for entitymanager
  @PersistenceContext
  private EntityManager entityManager;

  public UserDAO() {
  }

  @Override
  @Transactional /// don't have to handle commits
  public void saveUser(User user) {

    // Get the current hibernate session
    Session currentSession = entityManager.unwrap(Session.class);

    currentSession.saveOrUpdate(user);
  }
}
