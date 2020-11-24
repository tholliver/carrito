/*INSERCIONES O BACKUP */
INSERT INTO `pedido` (`idpedido`,`direccion`,`fechaPedido`,`cantidadTotal`,`totalPagar`,`idclienteP`) VALUES (1,'SOME STREET',now(),4.00,458.45,1),
(2,'Some street 2',now(),4.00,512.00,1),
(4,'Some street 4',now(),5.00,512.00,1),
(5,'Some street 5',now(),5.00,512.00,1),
(6,'Some street 6',now(),5.00,512.00,1);

INSERT INTO `producto` (`idproducto`,`nombre`,`cantidad`,`precio`) VALUES (1,'coca',2,45.25),
 (2,'fanta',5,48.55),(3,'funko',6,48.00), (4,'clock-toy',5,51.36),(5,'figuras',8,52.00);
 
 
 /*CONSULTAS*/