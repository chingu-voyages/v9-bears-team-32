package com.chingu.stocks.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="users")
@SecondaryTable(name="authorities")
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

	@Column(table="authorities")
	private String authority;

  public User() {

  }

	public User(String username,
							String password,
							String displayName,
							String email) {
    this.username = username;
    this.password = password;
    this.displayName = displayName;
    this.email = email;
    this.cash = 10000;
    this.investedBalance = 0;
    this.enabled = 1;
		this.authority = "ROLE_USER";
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

	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}
}