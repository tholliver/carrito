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