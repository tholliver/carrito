# SQL Manager Lite for MySQL 5.5.3.46192
# ---------------------------------------
# Host     : localhost
# Port     : 3306
# Database : carrito de ventas


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin1 */;

SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE `carrito de ventas`
    CHARACTER SET 'latin1'
    COLLATE 'latin1_swedish_ci';

USE `carrito de ventas`;

#
# Structure for the `detalle_de_venta` table : 
#

CREATE TABLE `detalle_de_venta` (
  `COD_VENTA` INTEGER(11) NOT NULL,
  `SUBTOTAL_PRODUCTO` INTEGER(11) DEFAULT NULL,
  `CANTIDAD_PRODUCTO` INTEGER(11) DEFAULT NULL,
  PRIMARY KEY (`COD_VENTA`) USING BTREE,
  CONSTRAINT `FK_RELATIONSHIP_5` FOREIGN KEY (`COD_VENTA`) REFERENCES `venta` (`COD_VENTA`)
) ENGINE=InnoDB
CHARACTER SET 'latin1' COLLATE 'latin1_swedish_ci'
;

#
# Structure for the `forma_de_pago` table : 
#

CREATE TABLE `forma_de_pago` (
  `COD_FORMA_PAGO` INTEGER(11) NOT NULL,
  `EFECTIVO` VARCHAR(10) COLLATE latin1_swedish_ci DEFAULT NULL,
  `TAJETA_CREDITO` VARCHAR(10) COLLATE latin1_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`COD_FORMA_PAGO`) USING BTREE
) ENGINE=InnoDB
CHARACTER SET 'latin1' COLLATE 'latin1_swedish_ci'
;

#
# Structure for the `tipo_de_producto` table : 
#

CREATE TABLE `tipo_de_producto` (
  `COD_TIPO_PRODUCTO` INTEGER(11) NOT NULL,
  `NOMBRE_TIPO_PRODUCTO` VARCHAR(30) COLLATE latin1_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`COD_TIPO_PRODUCTO`) USING BTREE
) ENGINE=InnoDB
CHARACTER SET 'latin1' COLLATE 'latin1_swedish_ci'
;

#
# Structure for the `producto` table : 
#

CREATE TABLE `producto` (
  `COD_PRODUCTO` INTEGER(11) NOT NULL,
  `COD_TIPO_PRODUCTO` INTEGER(11) DEFAULT NULL,
  `NOMBRE_PRODUCTO` VARCHAR(50) COLLATE latin1_swedish_ci DEFAULT NULL,
  `CATIDAD_PRODUCTO` INTEGER(11) DEFAULT NULL,
  `DESCUENTO_PRODUCTO` VARCHAR(30) COLLATE latin1_swedish_ci DEFAULT NULL,
  `PRECIO_PRODCUTO` DECIMAL(10,0) DEFAULT NULL,
  PRIMARY KEY (`COD_PRODUCTO`) USING BTREE,
  KEY `FK_RELATIONSHIP_4` (`COD_TIPO_PRODUCTO`) USING BTREE,
  CONSTRAINT `FK_RELATIONSHIP_4` FOREIGN KEY (`COD_TIPO_PRODUCTO`) REFERENCES `tipo_de_producto` (`COD_TIPO_PRODUCTO`)
) ENGINE=InnoDB
CHARACTER SET 'latin1' COLLATE 'latin1_swedish_ci'
;

#
# Structure for the `venta` table : 
#

CREATE TABLE `venta` (
  `COD_VENTA` INTEGER(11) NOT NULL,
  `DET_COD_VENTA` INTEGER(11) DEFAULT NULL,
  `COD_FORMA_PAGO` INTEGER(11) DEFAULT NULL,
  `COD_PRODUCTO` INTEGER(11) DEFAULT NULL,
  `FECHA_VENTA` DATE DEFAULT NULL,
  `TOTAL_VENTA` DECIMAL(10,0) DEFAULT NULL,
  PRIMARY KEY (`COD_VENTA`) USING BTREE,
  KEY `FK_RELATIONSHIP_1` (`DET_COD_VENTA`) USING BTREE,
  KEY `FK_RELATIONSHIP_2` (`COD_FORMA_PAGO`) USING BTREE,
  KEY `FK_RELATIONSHIP_3` (`COD_PRODUCTO`) USING BTREE,
  CONSTRAINT `FK_RELATIONSHIP_1` FOREIGN KEY (`DET_COD_VENTA`) REFERENCES `detalle_de_venta` (`COD_VENTA`),
  CONSTRAINT `FK_RELATIONSHIP_2` FOREIGN KEY (`COD_FORMA_PAGO`) REFERENCES `forma_de_pago` (`COD_FORMA_PAGO`),
  CONSTRAINT `FK_RELATIONSHIP_3` FOREIGN KEY (`COD_PRODUCTO`) REFERENCES `producto` (`COD_PRODUCTO`)
) ENGINE=InnoDB
CHARACTER SET 'latin1' COLLATE 'latin1_swedish_ci'
;

#
# Data for the `forma_de_pago` table  (LIMIT 0,500)
#

INSERT INTO `forma_de_pago` (`COD_FORMA_PAGO`, `EFECTIVO`, `TAJETA_CREDITO`) VALUES
  (100,'si','no'),
  (101,'no','si'),
  (102,'no','si'),
  (103,'si','no');
COMMIT;

#
# Data for the `tipo_de_producto` table  (LIMIT 0,500)
#

INSERT INTO `tipo_de_producto` (`COD_TIPO_PRODUCTO`, `NOMBRE_TIPO_PRODUCTO`) VALUES
  (1,'comida'),
  (2,'cristaleria'),
  (3,'vestimenta'),
  (4,'farmacos');
COMMIT;

#
# Data for the `producto` table  (LIMIT 0,500)
#

INSERT INTO `producto` (`COD_PRODUCTO`, `COD_TIPO_PRODUCTO`, `NOMBRE_PRODUCTO`, `CATIDAD_PRODUCTO`, `DESCUENTO_PRODUCTO`, `PRECIO_PRODCUTO`) VALUES
  (10,1,'sillpancho',50,'5%',15),
  (11,1,'pollo a la broaster',100,'5%',18),
  (12,1,'pollo al spiedo',100,'5%',14),
  (13,1,'pique macho ',50,'0%',50),
  (14,1,'chicharron',80,'0%',70),
  (15,2,'vasos',200,'2%',10),
  (16,2,'copas',200,'2%',15),
  (17,2,'platos',150,'2%',20),
  (18,2,'jarras',100,'0%',30),
  (19,2,'hielera',80,'0%',50),
  (20,3,'pantalon',300,'10%',95),
  (21,3,'polera',400,'15%',40),
  (22,3,'chamarra',200,'10%',250),
  (23,3,'gorra',200,'10%',40),
  (24,3,'short',300,'15%',50),
  (25,4,'paracetamol',1000,'0%',1),
  (26,4,'aspirina',1500,'0%',1),
  (27,4,'mentisan',800,'0%',25),
  (28,4,'golpex',400,'0%',25);
COMMIT;



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;