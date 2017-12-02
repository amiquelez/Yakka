<?php include_once('includes/inc.pedido.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
		<title>Yakka</title>
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" type="text/css" media="all">
		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet">
		<link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="css/pedido.css" />
		<link rel="stylesheet" href="css/mobile.css" />
	</head>
	<body>
		<div>
			<div class="desktop">
				<header>
					<div class="left">
						<img src="img/logo_yakka.png" alt="Yakka" />
					</div>
					<div class="right">
						<ul class="top">
							<li>
								<a href="mailto:info@yakka.com.ar">
									<img src="https://yakka.com.ar/wp-content/uploads/2015/06/mail.png" alt="mail" />
									<span>info@yakka.com.ar</span></a>
							</li>
							<li>
								<a href="tel:+011-47099453">
									<img src="https://yakka.com.ar/wp-content/uploads/2015/06/telefono.png" alt="Tel" />
									<span>011 4709 9453</span>
								</a>
							</li>
							<li>
								<a href="tel:+011-48380924">
									<img src="https://yakka.com.ar/wp-content/uploads/2015/06/telefono.png" alt="Tel" />
									<span>011 4838 0924</span>
								</a>
							</li>
							<li>
								<a href="tel:+01151759181">
									<img src="https://yakka.com.ar/wp-content/uploads/2017/03/yakka-whatsapp-verde.png" alt="Whatsapp" />
									<span>11 5175 9181</span>
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/CamisetasYakka/">
									<img src="https://yakka.com.ar/wp-content/uploads/2017/03/facebook.png" alt="Facebook" />
									<span>Facebook</span>
								</a>
							</li>
						</ul>
						<ul class="bottom">
							<li><a href="https://yakka.com.ar/">INICIO</a></li>
							<li><a href="https://yakka.com.ar/productos/">Productos</a></li>
							<li><a href="https://yakka.com.ar/quienes-somos/">Nuestra Historia</a></li>
							<li><a href="https://yakka.com.ar/vende-nuestros-productos/">Revendedor</a></li>
							<li><a href="https://yakka.com.ar/ayuda/">Centro de Ayuda</a></li>
							<li><a href="https://yakka.com.ar/contactanos/">Contactanos</a></li>
						</ul>
					</div>
				</header>
			</div>
			<div class="mobile header_pedido_mb">
				<img src="img/yakka_mobile.png" alt="Yakka" />
			</div>
			<div id="finalizado">
				<div class="content_finalizado">
					<div class="left">
						<span class="p1">PEDIDO NRO: <?= $id ?></span>
						<p class="p2">Fecha: <?= $pedido->fecha ?></p>
						<p class="p3">MODELO SELECCIONADO:</p>
						<div id="finalizado_front">
							<div class="preview_front">
								<?php
									if( $pedido->color_secundario > 0 ){
								?>	
										<img src="img/modelos/modelo_<?= $pedido->diseno ?>/color_secundario/frente/<?= $pedido->color_secundario ?>.png" class="img_secundaria" />
								<?php
									}
								?>
								<img src="img/modelos/modelo_<?= $pedido->diseno ?>/color_principal/frente/<?= $pedido->color_principal ?>.png" class="img_principal" />
								<img src="img/modelos/modelo_base/frente/<?= $pedido->color_base ?>.png" class="img_base" />
							</div>
							<div class="footer">
								<p>CAMISETA REALIZADA CON EL</p>
								<p>PERSONALIZADOR DE CAMISETAS</p>
								<img src="img/yakka.png" alt="Yakka" />
							</div>
						</div>
						<div id="finalizado_back">
							<div class="preview_back">
								<?php
									if( $pedido->color_secundario > 0 ){
								?>	
										<img src="img/modelos/modelo_<?= $pedido->diseno ?>/color_secundario/espalda/<?= $pedido->color_secundario ?>.png" class="img_secundaria" />
								<?php
									}
								?>
								<img src="img/modelos/modelo_<?= $pedido->diseno ?>/color_principal/espalda/<?= $pedido->color_principal ?>.png" class="img_principal" />
								<img src="img/modelos/modelo_base/espalda/<?= $pedido->color_base ?>.png" class="img_base" />
							</div>
							<div class="formato_nro_back_mb">
								<img src="img/numeros/<?= $pedido->formato ?>/<?= $pedido->color_nro ?>.png">
							</div>
							<div class="footer">
								<p>CAMISETA REALIZADA CON EL</p>
								<p>PERSONALIZADOR DE CAMISETAS</p>
								<img src="img/yakka.png" alt="Yakka" />
							</div>
						</div>
					</div>
					<div class="right">
						<div class="info">
							<p class="p3">Datos Pedido</p>
							<p>Nombre y Apellido: <span><?= $pedido->nombre_apellido ?></span></p>
							<p>Email: <span><?= $pedido->email ?></span></p>
							<p>Telefono: <span><?= $pedido->telefono ?></span></p>
							<p>Comentario: <span><?= $pedido->comentario ?></span></p>
						</div>
						<p class="p3">Jugadores:</p>
						<ul id="list_players">
							<?php
							while ( $jugador = mysql_fetch_object($sqlJugadores) ){
							?>
							<li><span class="titulo">Nombre:</span> <span class="data_jugador"><?= $jugador->nombre ?></span> - <span class="titulo">Nro:</span> <span class="data_jugador"><?= $jugador->nro ?></span> - <span class="titulo">Talle:</span> <span class="data_jugador"><?= $jugador->talle ?></span></li>
							<?php
							}
							?>
						</ul>
					</div>
				</div>
				<form name="form_id_prod" action="" method="POST">
					<input type="hidden" name="id_pedido" id="id_pedido" value="<?= $id ?>" />
				</form>
				<div id="btn_pdf" class="desktop">Descargar PDF</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
		<script src="js/html2canvas.min.js"></script>
		<script src="js/script.js"></script>
		<script>
            $(document).ready(function() {
            	$('#btn_pdf').click(function() {       
			        html2canvas(document.body, {
			            onrendered: function(canvas) {
			                var imgData = canvas.toDataURL('image/png');
			                var doc = new jsPDF("landscape", "pt", "a4");
			               	var id = $('#id_pedido').val();

			                doc.addImage(imgData, 'PNG', -150, 0, 1170, 654);
			                doc.save('pedido'+id+'.pdf');
			            }
			        });
			    });
            });
		</script>
	</body>
</html>