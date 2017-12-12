<?php 

	require_once('conexion.php');

	$cnx = new Cnx();
	$cnx->conectar("yakkacom_camisetas");

	if( isset($_GET["nro"]) ){

		$id = $_GET["nro"];

	}

	$colores = [];

	$sqlPedido = mysql_query('SELECT * FROM pedidos WHERE id = '.$id);

	$pedido = mysql_fetch_object($sqlPedido);

	$sqlJugadores = mysql_query('SELECT * FROM jugadores WHERE pedido = '.$id.' ORDER BY FIELD (talle, 2, 4, 6, 8, 10, 12, 14, "S", "M", "L", "XL", "XXL")');

	$sqlColores = mysql_query('SELECT * FROM colores');

	$i = 1;

	while ( $result = mysql_fetch_object($sqlColores) ){

		$colores[$i] = $result->nombre;

		$i++;
	}

?>