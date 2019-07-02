SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` varchar(55) UNIQUE,
  `password` varchar(500) DEFAULT NULL,
  `display_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `cash` float(45) DEFAULT NULL,
  `invested_balance` float(45) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,

  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `authorities`;

CREATE TABLE `authorities` (
  `username` varchar(55) UNIQUE,
  `authority` varchar(45) DEFAULT "ROLE_USER",

  UNIQUE KEY `authorities_idx_1` (`username`, `authority`),

  CONSTRAINT `authorities_ibfk_1`
  FOREIGN KEY (`username`)
  REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `stock`;

CREATE TABLE `stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(55),
  `symbol` varchar(20),
  `purchase_price` float(45) DEFAULT 0,
  `purchase_date` timestamp (6) DEFAULT NULL,
  `quantity` int(100) DEFAULT NULL,
  `user` varchar(55),

  PRIMARY KEY (`id`),
  KEY `stock_idx_1` (`user`),
  CONSTRAINT `stock_ibfk_1`
  FOREIGN KEY (`user`)
  REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;