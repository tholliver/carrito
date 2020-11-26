/*INSERCIONES O BACKUP */
INSERT INTO `pedido` (`idpedido`,`direccion`,`fechaPedido`,`cantidadTotal`,`totalPagar`,`idclienteP`) VALUES (1,'SOME STREET',now(),4.00,458.45,1),
(2,'Some street 2',now(),4.00,512.00,1),
(4,'Some street 4',now(),5.00,512.00,1),
(5,'Some street 5',now(),5.00,512.00,1),
(6,'Some street 6',now(),5.00,512.00,1);

INSERT INTO `producto` (`idproducto`,`nombre`,`cantidad`,`precio`) VALUES (1,'coca',2,45.25),
 (2,'fanta',5,48.55),(3,'funko',6,48.00), (4,'clock-toy',5,51.36),(5,'figuras',8,52.00);
 
 
 /*CONSULTAS*/
/* 1.- Todos los clientes */
SELECT * FROM bpxswzqwuifl3kr6kmvs.cliente;

/*2.- Todos los Pedidos*/
SELECT * FROM bpxswzqwuifl3kr6kmvs.pedido;

/*3.- Todos los Productos*/
SELECT * FROM bpxswzqwuifl3kr6kmvs.producto;

/*4.- Todos los PedidosProductos*/
SELECT * FROM bpxswzqwuifl3kr6kmvs.pedidoProductos;

/*5.- nombre y direccion de los pedidos que el cliente hizo.*/
select nombre,direccion 
from bpxswzqwuifl3kr6kmvs.pedido,bpxswzqwuifl3kr6kmvs.cliente 
where idcliente=idpedido;

/*6.- nombre y direccion de los pedidos que el cliente hizo. opcion 2*/
select nombre,direccion 
from bpxswzqwuifl3kr6kmvs.pedido p,bpxswzqwuifl3kr6kmvs.cliente c 
where c.idcliente=p.idclienteP;

/*7.- nombre y direccion de los pedidos que el cliente hizo, sin repetidos.*/
select DISTINCT nombre,direccion 
from bpxswzqwuifl3kr6kmvs.pedido p,bpxswzqwuifl3kr6kmvs.cliente c 
where c.idcliente=p.idclienteP;

/*8.- nombre y direccion de los pedidos que el cliente hizo para la Av. Aroma N 30*/
select DISTINCT nombre,direccion 
from bpxswzqwuifl3kr6kmvs.pedido p,bpxswzqwuifl3kr6kmvs.cliente c 
where c.idcliente=p.idclienteP and p.direccion = 'Av. Aroma N 30';

/*9.- nombre y direccion de los pedidos que el cliente hizo para la Av. Aroma N 30 con la fecha y hora.*/
select DISTINCT nombre,direccion, p.fechaPedido
from bpxswzqwuifl3kr6kmvs.pedido p,bpxswzqwuifl3kr6kmvs.cliente c 
where c.idcliente=p.idclienteP and p.direccion = 'Av. Aroma N 30';

/* 10.- nombre ,direccion y el producto que compro de los pedidos que el cliente hizo para la Av. Aroma N 30 con la fecha y hora */

select c.nombre,pe.direccion, pe.fechaPedido, p.nombre
from bpxswzqwuifl3kr6kmvs.pedido pe,bpxswzqwuifl3kr6kmvs.cliente c, 
	 bpxswzqwuifl3kr6kmvs.pedidoProductos pp,bpxswzqwuifl3kr6kmvs.producto p 
where c.idcliente=pe.idclienteP and pe.idpedido=pp.pedido_idpedido and pp.producto_idproducto = p.idproducto  
and pe.direccion = 'Av. Aroma N 30';

/* 11.- nombre ,direccion y el producto que compro de los pedidos que el cliente hizo para la Av. Aroma N 30 con la fecha y hora, con el total a pagar */

select c.nombre,pe.direccion, pe.fechaPedido, p.nombre
from bpxswzqwuifl3kr6kmvs.pedido pe,bpxswzqwuifl3kr6kmvs.cliente c, 
	 bpxswzqwuifl3kr6kmvs.pedidoProductos pp,bpxswzqwuifl3kr6kmvs.producto p 
where c.idcliente=pe.idclienteP and pe.idpedido=pp.pedido_idpedido and pp.producto_idproducto = p.idproducto  
and pe.direccion = 'Av. Aroma N 30';

/* 12.- nombre ,direccion y el producto que compro de los pedidos que el cliente con la fecha y hora, con el total a pagar */

select c.nombre,pe.direccion, pe.fechaPedido, p.nombre,pe.totalPagar
from bpxswzqwuifl3kr6kmvs.pedido pe,bpxswzqwuifl3kr6kmvs.cliente c, 
	 bpxswzqwuifl3kr6kmvs.pedidoProductos pp,bpxswzqwuifl3kr6kmvs.producto p 
where c.idcliente=pe.idclienteP and pe.idpedido=pp.pedido_idpedido and pp.producto_idproducto = p.idproducto;

/* 13.- nombre ,direccion y el producto que compro de los pedidos que el cliente con la fecha y hora, con el total a pagar en orden alfabetico*/ 

select c.nombre,pe.direccion, pe.fechaPedido, p.nombre,pe.totalPagar
from bpxswzqwuifl3kr6kmvs.pedido pe,bpxswzqwuifl3kr6kmvs.cliente c, 
	 bpxswzqwuifl3kr6kmvs.pedidoProductos pp,bpxswzqwuifl3kr6kmvs.producto p 
where c.idcliente=pe.idclienteP and pe.idpedido=pp.pedido_idpedido and pp.producto_idproducto = p.idproducto
order by c.nombre asc;

/* 14.- nombre ,direccion y el producto que compro de los pedidos que el cliente con la fecha y hora, con el total a pagar en orden alfabetico */
/*y cuantos peidos hizo en total*/

select c.nombre,pe.direccion, pe.fechaPedido, p.nombre,pe.totalPagar,count(c.nombre) as ordenes
from bpxswzqwuifl3kr6kmvs.pedido pe,bpxswzqwuifl3kr6kmvs.cliente c, 
	 bpxswzqwuifl3kr6kmvs.pedidoProductos pp,bpxswzqwuifl3kr6kmvs.producto p 
where c.idcliente=pe.idclienteP and pe.idpedido=pp.pedido_idpedido and pp.producto_idproducto = p.idproducto
group by c.nombre
order by c.nombre asc;

/*Insertar clientes*/

INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('4', 'Francisco lopez');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('5', 'Manuel Gonzales');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('6', 'Pedro Gomez');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('7', 'Javier Perez');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('8', 'Daniel Gonzales');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('9', 'Luis Romero');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('10', 'Pablo Molina');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('11', 'Maria Tereza Llanos');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('12', 'Raquel Ortiz');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('13', 'Irene Torres');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('14', 'Angeles Alarcon');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`cliente` (`idcliente`, `nombre`) VALUES ('15', 'Ana Belen Ramirez');

/*Pedidos*/

INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('4', 'Av. Oquendo y Sucre N 256', '2020-10-17 17:15:02', '8', '102.58', '6');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('5', 'Av. Oquendo y Jordan N 57', '2020-10-17 18:29:11', '6', '82.50', '7');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('6', '16 de Julio y Calama N 14', '2020-10-17 15:15:28', '2', '56.00', '8');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('7', 'Antezana y Ladislao Cabrera N48', '2020-11-01 10:21:05', '8', '84.50', '9');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('8', 'Lanza y Bolivar N 12', '2020-11-02 12:25:05', '2', '94.30', '10');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('9', 'Av. Heroinas y San Martin N 74', '2020-11-02 13:15:45', '8', '120.50', '11');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('10', '25 de Mayo y Colombia N 52', '2020-11-02 17:45:52', '10', '152.00', '12');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('11', 'España y Ecuador N 247', '2020-11-02 19:36:21', '5', '60.50', '13');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('12', 'Baptista y Mayor Rocha N 59', '2020-11-03 09:42:02', '4', '83.50', '14');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('13', 'Baptista y Mexico N 48', '2020-11-03 11:00:45', '8', '91.00', '15');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('14', 'Av. Ayacucho y La Paz N 652', '2020-11-03 13:00:45', '3', '25.50', '3');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedido` (`idpedido`, `direccion`, `fechaPedido`, `cantidadTotal`, `totalPagar`, `idclienteP`) VALUES ('15', 'Av. Jose Ballivian y Chuquisaca N 96', '2020-11-03 14:26:35', '7', '95.50', '4');

/*Productos*/

INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('6', 'Lemon', '10', '24.51', '/img/6.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('7', 'Mango', '7', '35.50', '/img/7.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('8', 'Pineapple', '21', '18.89', '/img/8.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('9', 'Asparagus', '15', '15.42', '/img/9.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('10', 'Lettuce', '18', '17.45', '/img/10.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('11', 'Corn', '17', '7.53', '/img/11.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('12', 'spanish cheese', '25', '230.82', '/img/12.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('13', 'fresh pears', '20', '123.82', '/img/13.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('14', 'big apples', '12', '203.04', '/img/14.jpg');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`producto` (`idproducto`, `nombre`, `cantidad`, `precio`, `img`) VALUES ('15', 'sweet blueberries', '17', '321.02', '/img/15.jpg');


/*Pedidos Productos*/
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('4', '15', '4');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('5', '14', '10');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('6', '13', '2');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('7', '12', '3');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('8', '11', '4');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('9', '10', '5');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('10', '9', '4');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('11', '8', '2');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('12', '7', '7');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('13', '6', '8');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('14', '5', '6');
INSERT INTO `bpxswzqwuifl3kr6kmvs`.`pedidoProductos` (`pedido_idpedido`, `producto_idproducto`, `cantidadComp`) VALUES ('15', '4', '9');
