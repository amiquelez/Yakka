<?php

	/* CONEXION BASE DE DATOS */

	require_once('conexion.php');

	$cnx = new Cnx();
	$cnx->conectar("yakkacom_camisetas");

	$fecha = date("Y-m-d");
	$diseno = $_POST["option_diseno"];
	$color_base = $_POST["option_color_base"];
	$color_principal = $_POST["option_color_principal"];
	$color_secundario = $_POST["option_color_secundario"];
  $formato = $_POST["option_formato"];
	$color_nro = $_POST["option_color_text"];
	$nombre_apellido = $_POST["nombre_apellido"];
	$email = $_POST["email"];
	$telefono = $_POST["telefono"];
	$comentario = $_POST["comentario"];


	$sqlInsertPedido = mysql_query('INSERT INTO pedidos(fecha, diseno, color_base, color_principal, color_secundario, formato, color_nro, nombre_apellido, email, telefono, comentario, estado, diseno_arquero, color_base_arquero, color_principal_arquero, color_secundario_arquero, formato_arquero, color_nro_arquero) VALUES( "'.$fecha.'", '.$diseno.', '.$color_base.', '.$color_principal.', '.$color_secundario.', '.$formato.', '.$color_nro.', "'.$nombre_apellido.'", "'.$email.'", "'.$telefono.'", "'.$comentario.'", 1, '.$_POST["option_diseno_arq"].', '.$_POST["option_color_base_arq"].', '.$_POST["option_color_principal_arq"].', '.$_POST["option_color_secundario_arq"].', '.$_POST["option_formato_arq"].', '.$_POST["option_color_text_arq"].' )');

	$pedido = mysql_insert_id();

  $cantidadCamisetas = count($_POST["nombre_jugador"]);

	for( $i = 0; $i < $cantidadCamisetas; $i++ ){

		$sqlInsertJugador = mysql_query('INSERT INTO jugadores(nombre, nro, talle, pedido) VALUES("'.$_POST["nombre_jugador"][$i].'", "'.$_POST["numero_jugador"][$i].'", "'.$_POST["talle_jugador"][$i].'", '.$pedido.')');

	}


	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: <info@yakka.com.ar>' . "\r\n";

	$message = '<table  width="600px" cellspacing="0" cellpadding="0" border="0" class="responsive-table2" style="margin:40px 20px;padding:0;width:100%!important;background-color: whitesmoke;border-radius:4px;border:1px #f7f8f8 solid;max-width:722px;margin:auto;-webkit-box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);-moz-box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);">
   <tbody>
    <tr>
      <td>
      <table  align="center">
        <tbody>
          <tr>
            <td style="padding: 30px 0;color: #656565;font-family: sans-serif;">
              <img src="http://yakka.com.ar/personalizador/hombre/img/logo_yakka.png" alt="Yakka">
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
             Gracias por tu compra. Podes ver tu pedido haciendo <a href="http://yakka.com.ar/personalizador/hombre/pedido-'.$pedido.'" target="_blank" title="Ver pedido" style="color:#3096fe; font-family: "Source Sans Pro", sans-serif; font-style: italic; font-weight: 700;text-decoration: none;" >click aquí</a></td>
             </tr>
             <tr>
                <td style="color: #161616;font-size: 18px;padding: 20px 30px 40px 30px;line-height:21px;text-align: center;font-family: "Source Sans Pro", sans-serif;" align="center">Cualquier consulta podes comunicarte con nosotros al 011 4709 9453 o por mail al info@yakka.com.ar
             </td>
             <td style="height: 30px;">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <table align="center" style="background: #fdfdfd; width: 90%;">
        <tbody>
          <tr>
            <td style="padding: 0px 30px 40px 30px;" align="center">
              <a href="http://yakka.com.ar/personalizador/hombre/pedido-'.$pedido.'" target="_blank"><img src="http://yakka.com.ar/personalizador/hombre/img/boton_mailing.jpg" alt="Ver Pedido" /></a>
            </td>
          </tr>
        </tbody>
      </table>

      </td>
    </tr>
  </table>';

  $messageToYakka = '<table  width="600px" cellspacing="0" cellpadding="0" border="0" class="responsive-table2" style="margin:40px 20px;padding:0;width:100%!important;background-color: whitesmoke;border-radius:4px;border:1px #f7f8f8 solid;max-width:722px;margin:auto;-webkit-box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);-moz-box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);box-shadow: -1px 2px 7px -1px rgba(125,125,125,1);">
   <tbody>
    <tr>
      <td>
      <table  align="center">
        <tbody>
          <tr>
            <td style="padding: 30px 0;color: #656565;font-family: sans-serif;">
              <img src="http://yakka.com.ar/personalizador/hombre/img/logo_yakka.png" alt="Yakka">
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center" style="background: #fdfdfd;width: 90%;">
        <tbody>
          <tr>
            <td class="titulo" style="font-size:30px;padding: 20px 10px;font-weight:700;color: #494949;
              font-family: Source Sans Pro, sans-serif;text-align: center;text-transform:uppercase;">
              ¡Nuevo pedido ingresado!
            </td>
          </tr>
       </tbody>
      </table>
      <table align="center" style="background: #fdfdfd;width: 90%;">
        <tbody>
          <tr>
            <td class="contenido" style="font-size: 18px;padding: 10px 30px 0px 30px;line-height:21px;text-align: center;font-family: "Source Sans Pro", sans-serif;color: #161616;" align="center">
              Tenés un nuevo pedido de camisetas mirá los detalles haciendo <a href="http://yakka.com.ar/personalizador/hombre/pedido-'.$pedido.'" target="_blank" title="Ver pedido" style="color:#3096fe; font-family: "Source Sans Pro", sans-serif; font-style: italic; font-weight: 700;text-decoration: none;" >click aquí</a>
            </td>
          </tr>
       </tbody>
      </table>
      <table align="center" style="background: #fdfdfd; width: 90%;">
        <tbody>
          <tr>
            <td class="contenido" style="font-size: 18px;padding: 10px 30px 0px 30px;line-height:21px;text-align: center;font-family: "Source Sans Pro", sans-serif;color: #161616;" align="center">Nombre / Email: '.$nombre_apellido.' - '.$email.'</td>
             </tr>
             <tr>
                <td style="color: #161616;font-size: 18px;padding: 20px 30px 0 30px;line-height:21px;text-align: center;font-family: "Source Sans Pro", sans-serif;" align="center">Telefono: '.$telefono.'</td>
             <tr>
                <td style="color: #161616;font-size: 18px;padding: 20px 30px 40px 30px;line-height:21px;text-align: center;font-family: "Source Sans Pro", sans-serif;" align="center">Cantidad de camisetas: '.$cantidadCamisetas.'</td>
             <td style="height: 30px;">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <table align="center" style="background: #fdfdfd; width: 90%;">
        <tbody>
          <tr>
            <td style="padding: 0px 30px 40px 30px;" align="center">
              <a href="http://yakka.com.ar/personalizador/hombre/pedido-'.$pedido.'" target="_blank"><img src="http://yakka.com.ar/personalizador/hombre/img/boton_mailing.jpg" alt="Ver Pedido" /></a>
            </td>
          </tr>
        </tbody>
      </table>

      </td>
    </tr>
  </table>';

  mail($email,'Tu pedido de camiseta - Yakka',$message,$headers); // al user
	mail('info@yakka.com.ar','¡Nuevo pedido ingresado!',$messageToYakka,$headers); // a yakka


?>