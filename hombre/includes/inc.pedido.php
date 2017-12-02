<?php 

	require_once('conexion.php');

	$cnx = new Cnx();
	$cnx->conectar("yakkacom_camisetas");

	if( isset($_GET["nro"]) ){

		$id = $_GET["nro"];

	}

	$sqlPedido = mysql_query('SELECT * FROM pedidos WHERE id = '.$id);

	$pedido = mysql_fetch_object($sqlPedido);

	$sqlJugadores = mysql_query('SELECT * FROM jugadores WHERE pedido = '.$id);


?>