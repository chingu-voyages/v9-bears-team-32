package com.chingu.stocks.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="users")
public class User {
  @Id
  @Column(name="username")
  private String username;

  @Column(name="password")
  @JsonProperty(access = Access.WRITE_ONLY)
  private String password;

  @Column(name="display_name")
  private String displayName;

  @Column(name="email")
  private String email;

  @Column(name="cash")
  private int cash;

  @Column(name="invested_balance")
  private int investedBalance;

  @Column(name="enabled")
  private byte enabled;

  public User() {

  }

  public User(String username,
              String password,
              String displayName,
              String email,
              int cash,
              int investedBalance) {
    this.username = username;
    this.password = password;
    this.displayName = displayName;
    this.email = email;
    this.cash = cash;
    this.investedBalance = investedBalance;
    this.enabled = 1;
  }

  	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
  }

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDisplayName() {
		return this.displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
  }

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
  }

	public int getCash() {
		return this.cash;
	}

	public void setCash(int cash) {
		this.cash = cash;
  }

	public int getInvestedBalance() {
		return this.investedBalance;
	}

	public void setInvestedBalance(int investedBalance) {
		this.investedBalance = investedBalance;
  }

	public byte getEnabled() {
		return this.enabled;
	}

	public void setEnabled(byte enabled) {
		this.enabled = enabled;
	}
}