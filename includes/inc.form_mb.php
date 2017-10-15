<?php

	/* CONEXION BASE DE DATOS */

	require_once('conexion.php');

	$cnx = new Cnx();
	$cnx->conectar("yakkacom_camisetas");

	$fecha = date("Y-m-d");
	$diseno = $_POST["option_diseno_mb"];
	$color_base = $_POST["option_color_base_mb"];
	$color_principal = $_POST["option_color_principal_mb"];
	$color_secundario = $_POST["option_color_secundario_mb"];
	$formato = $_POST["option_formato_mb"];
	$nombre = $_POST["option_nombre_mb"];
	$nombre_apellido = $_POST["nombre_mb"];
	$email = $_POST["email_mb"];
	$telefono = $_POST["telefono_mb"];
	$comentario = $_POST["comentarios_mb"];


	$sqlInsertPedido = mysql_query('INSERT INTO pedidos(fecha, diseno, color_base, color_principal, color_secundario, formato, sin_nombre, nombre_apellido, email, telefono, comentario, estado) VALUES( "'.$fecha.'", '.$diseno.', '.$color_base.', '.$color_principal.', '.$color_secundario.', '.$formato.', '.$nombre.', "'.$nombre_apellido.'", "'.$email.'", "'.$telefono.'", "'.$comentario.'", 1 )');

	$pedido = mysql_insert_id();

	for( $i = 0; $i < count($_POST["nombre_jugador_mb"]); $i++ ){

		$sqlInsertJugador = mysql_query('INSERT INTO jugadores(nombre, nro, talle, pedido) VALUES("'.$_POST["nombre_jugador_mb"][$i].'", "'.$_POST["numero_jugador_mb"][$i].'", "'.$_POST["talle_jugador_mb"][$i].'", '.$pedido.')');

	}


	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: <contacto@yakka.com.ar>' . "\r\n";

	$message = '<table  width="600px" cellspacing="0" cellpadding="0" border="0" class="responsive-table2" style="margin:40px 20px;padding:0;width:100%!important;background-color: whitesmoke;border-radius:4px;border:1px #f7f8f8 solid;max-width:722px;margin:auto;-webkit-box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);-moz-box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);">
   <tbody>
    <tr>
      <td>
      <table  align="center">
        <tbody>
          <tr>
            <td style="padding: 30px 0;color: #656565;font-family: sans-serif;">
              <img src="http://yakka.com.ar/test/img/logo_yakka.png" alt="Yakka">
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center" style="background: #fdfdfd;width: 90%;">
        <tbody>
          <tr>
            <td class="titulo" style="font-size:30px;padding: 20px 10px;text-transform: uppercase;font-weight:700;color: #494949;
              font-family: Source Sans Pro, sans-serif;text-align: center;">
              ¡Tu pedido se realizó con éxito!
            </td>
          </tr>
       </tbody>
      </table>
      <table align="center" style="background: #fdfdfd; width: 90%;">
        <tbody>
          <tr>
            <td class="contenido" style="font-size: 18px;padding: 10px 30px 0px 30px;line-height:21px;text-align: center;font-family: "Source Sans Pro", sans-serif;color: #161616;" align="center">
             Gracias por tu compra. Podes ver tu pedido haciendo <a href="http://yakka.com.ar/test/pedido.php?nro='.$pedido.'" target="_blank" title="Ver pedido" style="color:#3096fe; font-family: "Source Sans Pro", sans-serif; font-style: italic; font-weight: 700;text-decoration: none;" >click aquí</a></td>
             </tr>
             <tr>
                <td style="color: #161616;font-size: 18px;padding: 20px 30px 40px 30px;line-height:21px;text-align: center;font-family: "Source Sans Pro", sans-serif;" align="center">Cualquier consulta podes comunicarte con nosotros al 011 4709 9453 o por mail al info@yakka.com.ar
             </td>
             <td style="height: 30px;"></td>
          </tr>
        </tbody>
      </table>
      <table align="center" style="background: #fdfdfd; width: 90%;">
        <tbody>
          <tr>
            <td style="padding: 0px 30px 40px 30px;" align="center">
              <a href="http://yakka.com.ar/test/pedido.php?nro='.$pedido.'" target="_blank"><img src="http://yakka.com.ar/test/img/boton_mailing.jpg" alt="Ver Pedido" /></a>
            </td>
          </tr>
        </tbody>
      </table>

      </td>
    </tr>
  </table>';

  mail('','Nuevo pedido de camiseta - Yakka',$message,$headers);


?>