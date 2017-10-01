drop table burgers;

CREATE TABLE `burgers` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`burger_name` varchar(255) NOT NULL,
`devoured` tinyint(4) NOT NULL DEFAULT 0,
`date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
