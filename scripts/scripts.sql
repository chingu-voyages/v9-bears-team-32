SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` varchar(55) UNIQUE,
  `password` varchar(500) DEFAULT NULL,
  `display_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `cash` int(45) DEFAULT NULL,
  `invested_balance` int(45) DEFAULT NULL,
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