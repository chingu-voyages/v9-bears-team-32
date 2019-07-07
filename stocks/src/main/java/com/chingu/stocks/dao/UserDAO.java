package com.chingu.stocks.dao;

import javax.persistence.EntityManager;

import com.chingu.stocks.entity.Stock;
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

  @Override
  @Transactional
  public void addStock(String username, Stock stock) {
    Session currentSession = entityManager.unwrap(Session.class);
    User user = currentSession.get(User.class, username);

    // Subtract price from cash available and add to investedBalance
    if(user.getCash() > stock.getPurchasePrice()) {
      user.setCash(user.getCash() - stock.getPurchasePrice());
      user.setInvestedBalance(user.getInvestedBalance() + stock.getPurchasePrice());
    } else {
      // TODO add handling of not enough cash here.
      return;
    }

    for(Stock existingStock : user.getStocks()){
      if(existingStock.getSymbol().equals(stock.getSymbol())) {
        existingStock.setQuantity(existingStock.getQuantity() + stock.getQuantity());
        currentSession.saveOrUpdate(user);
        return;
      }
    }
    user.addStock(stock);
    currentSession.saveOrUpdate(user);
  }
}
