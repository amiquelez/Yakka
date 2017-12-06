$( document ).ready( function(){

	/* OPTIONS */

		/* Colores disponibles por modelo */

	var principal = [];
	var secundario = [];
	var secundario_no_espalda = [];
	var formato = [];
	var vistaArquero = false;
	
	principal[1] = true;
	secundario[1] = false;

	principal[2] = true;
	secundario[2] = false;

	principal[3] = true;
	secundario[3] = true;

	principal[4] = true;
	secundario[4] = false;
	// secundario_no_espalda[4] = true; // true si no tiene secundario en espalda

	principal[5] = true;
	secundario[5] = true;
	secundario_no_espalda[5] = true;

	principal[6] = true;
	secundario[6] = true;

	principal[7] = true;
	secundario[7] = false;

	principal[8] = true;
	secundario[8] = true;

	principal[9] = true;
	secundario[9] = true;

	principal[10] = true;
	secundario[10] = false;

	principal[11] = true;
	secundario[11] = false;

	principal[12] = true;
	secundario[12] = false;

	principal[13] = true;
	secundario[13] = false;

	principal[14] = true;
	secundario[14] = false;

	principal[15] = true;
	secundario[15] = false;

	principal[16] = true;
	secundario[16] = false;

	principal[17] = true;
	secundario[17] = true;

	principal[18] = true;
	secundario[18] = true;

	principal[19] = true;
	secundario[19] = false;

	principal[20] = true;
	secundario[20] = true;

	principal[21] = true;
	secundario[21] = false;

	principal[22] = true;
	secundario[22] = false;

	principal[23] = true;
	secundario[23] = true;

	principal[24] = true;
	secundario[24] = true;

	principal[25] = true;
	secundario[25] = false;

	principal[26] = true;
	secundario[26] = true;

	principal[27] = true;
	secundario[27] = true;

 	/* NAV OPTIONS */

	$('#btn_diseno').click( function(){

		$('#options_diseno').css('display', 'block');
		$('#paginador_diseno').css('display', 'inline-block');

		$('#options_colores').css('display', 'none');

		$('#options_texto').css('display', 'none');

		$('#btn_diseno').removeClass().addClass('option_select');
		$('#btn_colores').removeClass().addClass('option_disable');
		$('#btn_numeros').removeClass().addClass('option_disable');

	});
	$('#btn_colores').click( function(){

		$('#options_diseno').css('display', 'none');
		$('#paginador_diseno').css('display', 'none');

		$('#options_colores').css('display', 'block');

		$('#options_texto').css('display', 'none');

		$('#btn_diseno').removeClass().addClass('option_disable');
		$('#btn_colores').removeClass().addClass('option_select');
		$('#btn_numeros').removeClass().addClass('option_disable');

	});
	$('#btn_numeros').click( function(){

		$('#options_diseno').css('display', 'none');
		$('#paginador_diseno').css('display', 'none');

		$('#options_colores').css('display', 'none');
		
		$('#options_texto').css('display', 'block');

		$('#btn_diseno').removeClass().addClass('option_disable');
		$('#btn_colores').removeClass().addClass('option_disable');
		$('#btn_numeros').removeClass().addClass('option_select');

	});


	/* NAV JUGADOR - ARQUERO */

	$('#btn_modelo_jugador').click( function(){

		$('#preview nav ul li img').css('display', 'none');
		$('.img_jugador_over').css('display', 'inline');
		$('.img_arquero').css('display', 'inline');
		$(this).addClass('option_select');
		$(this).removeClass('option_disable');
		$('#btn_modelo_arquero').removeClass('option_select');
		$('#btn_modelo_arquero').addClass('option_disable');

		vistaArquero = false;

		updateVista("jugador", secundario, secundario_no_espalda);

	});

	$('#btn_modelo_arquero').click( function(){

		$('#preview nav ul li img').css('display', 'none');
		$('.img_arquero_over').css('display', 'inline');
		$('.img_jugador').css('display', 'inline');
		$(this).addClass('option_select');
		$(this).removeClass('option_disable');
		$('#btn_modelo_jugador').removeClass('option_select');
		$('#btn_modelo_jugador').addClass('option_disable');

		vistaArquero = true;

		updateVista("arquero", secundario, secundario_no_espalda);

	});


	/* SELECT DISENO */

	$('.sel_diseno').click( function(){


		var option = this.id.split("diseno_");

		var opt_diseno = option[1];

		if( vistaArquero ){

			updateDiseno("arquero", opt_diseno, secundario, secundario_no_espalda);

		}else{

			updateDiseno("jugador", opt_diseno, secundario, secundario_no_espalda);

		}

		// Pintar borde del seleccionado
		$('.sel_diseno').removeClass("selected");

		$(this).addClass("selected");


		// Ocultar o mostrar opciones de colores principales y secundarios si estan disponibles en el modelo

		if( principal[opt_diseno] ){

			$('#color_principal_box').css('display', 'block');

		}else{
 	
 			$('#color_principal_box').css('display', 'none');

		}

		if( secundario[opt_diseno] ){

			$('#color_secundario_box').css('display', 'block');

		}else{
 	
 			$('#color_secundario_box').css('display', 'none');

		}

	});

		/* SELECT DISENO - paginador */

		var pageActual = 1;

		function showPage(number){

			$('.sel_diseno').css("display", "none");
			$('.sel_diseno_page_'+number).css("display", "inline");

			$('#paginador_diseno span').removeClass('selected_page');
			$('#btn_pg_diseno_'+number).addClass('selected_page');

			pageActual = number;

		}

		$('#btn_pg_diseno_1').click( function(){

			showPage(1);

		});

		$('#btn_pg_diseno_2').click( function(){
			
			showPage(2);

		});

		$('#btn_pg_diseno_3').click( function(){
			
			showPage(3);

		});

		$('#btn_pg_prev').click( function(){

			if( parseInt(pageActual) > 1 ){

				var num = parseInt(pageActual)-1;

				showPage(num);
				pageActual = num;
				

			}		

		});

		$('#btn_pg_next').click( function(){

			if( parseInt(pageActual) < 3 ){

				var num = parseInt(pageActual)+1;

				showPage(num);
				pageActual = num;

			}	

		});


	/* SELECT COLOR BASE */

	$('.sel_color_base').click( function(){

		var option = this.id.split("color_base_");

		var nro_modelo;

		if( vistaArquero ){ // Configuracion arquero

			nro_modelo = $('#option_diseno_arq').val();
			$('#option_color_base_arq').val(option[1]);

		}else{ // Configuracion jugador

			nro_modelo = $('#option_diseno').val();
			$('#option_color_base').val(option[1]);

		}

		$('.preview_front .img_base').attr('src', 'img/modelos/modelo_base/frente/'+option[1]+'.png');
		$('.preview_back .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+option[1]+'.png');

	});

	/* SELECT COLOR PRINCIPAL */

	$('.sel_color_principal').click( function(){

		var option = this.id.split("color_principal_");

		var nro_modelo;

		if( vistaArquero ){ // Configuracion arquero

			nro_modelo = $('#option_diseno_arq').val();
			$('#option_color_principal_arq').val(option[1]);

		}else{ // Configuracion jugador

			nro_modelo = $('#option_diseno').val();
			$('#option_color_principal').val(option[1]);

		}

		$('.preview_front .img_principal').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_principal/frente/'+option[1]+'.png');
		$('.preview_back .img_principal').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_principal/espalda/'+option[1]+'.png');

	});

	/* SELECT COLOR SECUNDARIO */

	$('.sel_color_secundario').click( function(){

		var option = this.id.split("color_secundario_");

		var nro_modelo;

		if( vistaArquero ){ // Configuracion arquero

			nro_modelo = $('#option_diseno_arq').val();
			$('#option_color_secundario_arq').val(option[1]);

		}else{ // Configuracion jugador

			nro_modelo = $('#option_diseno').val();
			$('#option_color_secundario').val(option[1]);

		}


		$('.preview_front .img_secundaria').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_secundario/frente/'+option[1]+'.png');
		
		if( secundario_no_espalda[nro_modelo] ){
		
			$('.preview_back .img_secundaria').attr('src', 'img/transparent.png');
	
		}else{
			
			$('.preview_back .img_secundaria').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_secundario/espalda/'+option[1]+'.png');
		
		}

	});

	/* SELECT FORMATO */

	$('.sel_formato').click( function(){

		var option = this.id.split("formato_");

		var opt = option[1];

		var opt_color;

		if( vistaArquero ){ // Configuracion arquero

			$('#option_formato_arq').val(opt);
			opt_color = $('#option_color_text_arq').val();

			$('.formato_nro_back img').attr('src', 'img/numeros_arq/'+opt+'/'+opt_color+'.png');

		}else{ // Configuracion jugador

			$('#option_formato').val(opt);
			opt_color = $('#option_color_text').val();

			$('.formato_nro_back img').attr('src', 'img/numeros/'+opt+'/'+opt_color+'.png');
		
		}

		// Pintar borde del seleccionado
		$('.sel_formato').removeClass("selected");

		$(this).addClass("selected");

	});

	/* SELECT COLOR TEXT */

	$('.sel_color_text').click( function(){

		var option = this.id.split("color_text_");

		var opt;

		if( vistaArquero ){ // Configuracion arquero

			$('#option_color_text_arq').val(option[1]);
			opt = $('#option_formato_arq').val();

			$('.formato_nro_back img').attr('src', 'img/numeros_arq/'+opt+'/'+option[1]+'.png');

		}else{ // Configuracion jugador

			$('#option_color_text').val(option[1]);
			opt = $('#option_formato').val();

			$('.formato_nro_back img').attr('src', 'img/numeros/'+opt+'/'+option[1]+'.png');

		}

	});


	/* BTN CONFIRMAR DISENO */

	$('#btn_confirmar').click( function(){

		$('#disenador').fadeOut( "slow", function() {

			updateVistaFinal(secundario, secundario_no_espalda);

		   	$('#formulario').fadeIn();

		  });

	});

	/* BTN CONFIRMAR DISENO */

	$('#btn_modificar').click( function(){

		$('#formulario').fadeOut( "fast", function() {
		   	$('#disenador').fadeIn();
		  });

	});


	/* FORMULARIO */

		/* Agragar Jugador */

	$('#add_jugador').click(function(){

		var row_jugador = '<div class="row_jugador"><label>NOMBRE: <input type="text" name="nombre_jugador[]" class="nombre_jugador" /></label><label>N&ordm;: <input type="number" min="0" name="numero_jugador[]" class="numero_jugador" maxlength="3" /></label><label>TALLE: <select name="talle_jugador[]" class="talle_jugador"><option value="2">2</option><option value="4">4</option><option value="6">6</option><option value="8">8</option><option value="10">10</option><option value="12">12</option><option value="14">14</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select></label><span class="btn_delete">X</span></div>';

		$('#list_jugadores').append(row_jugador);

	});

	   /* Delete Jugador */

	$(document).on('click','.btn_delete',function() {
		$(this).parent().remove();
	});


	/* ENVIAR PEDIDO */

	$("form#formulario").submit(function(event){

		event.preventDefault();

		ga('send', 'event', 'Diseñador', 'confirmar diseno');

		var diseno = $('#option_diseno').val();
		var color_base = $('#option_color_base').val();
		var color_principal = $('#option_color_principal').val();
		var color_secundario = $('#option_color_secundario').val();
		var formato = $('#option_formato').val();
		var nombre_apellido = $('#nombre_apellido').val();
		var email = $('#email').val();
		var telefono = $('#telefono').val();
		var comentario = $('#comentario').val();

		var row_jugador = $('.row_jugador');

		var nombre_jugador = $('.nombre_jugador');
		var numero_jugador = $('.numero_jugador');

		var errorJugadores = true;

		for( var i = 0; i < row_jugador.length; i++ ){

			var nombre = nombre_jugador[i].value;
			var numero = numero_jugador[i].value;

			// if( nombre == "" ){
			// 	nombre_jugador[i].style.border = "1px solid #f51a1a";
			// 	errorJugadores = false;
			// }else{
			// 	nombre_jugador[i].style.border = "1px solid #afafaf";
			// }

			if( numero == "" ){
				numero_jugador[i].style.border = "1px solid #f51a1a";
				errorJugadores = false;
			}else{
				numero_jugador[i].style.border = "1px solid #afafaf";
			}

		}


		/* Verificaciones */ 

		if( nombre_apellido == '' ){

			$('#nombre_apellido').css("border", "1px solid #f51a1a");

		}else{

			$('#nombre_apellido').css("border", "1px solid #bdc4c9");

		}

		var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var test = ( emailRegExp.test(email) );
		if( email == '' || !test ){

			$('#email').css("border", "1px solid #f51a1a");

		}else{

			$('#email').css("border", "1px solid #bdc4c9");

		}

		if( row_jugador.length < 8 ){
			$('#formulario .top .alert_min').css('color', 'rgb(245, 26, 26)');
		}else{
			$('#formulario .top .alert_min').css('color', '#afafaf');
		}

		if( email != '' && test && nombre_apellido != '' && row_jugador.length >= 8 && errorJugadores ){

			var formData = new FormData($(this)[0]);

			$.ajax({
			    url: 'includes/inc.form.php',
			    type: 'POST',
			    data: formData,
			    async: false,
			    cache: false,
			    contentType: false,
			    processData: false,
			    success: function (returndata) {
					$('#formulario').fadeOut( "fast", function() {
					   	$('#finalizado').fadeIn();
					  });
			    }
			});
			
		}

	});



	/* MOBILE */

	$('#btn_estampado_mb').click( function(){

		volverDefault();

		$('#option_estampados').css('display', 'block');

		$(this).find(".txt_btn_mb").css('color', '#3096fe');

		$(this).find(".img_default").css('display', 'none');
		$(this).find(".img_hover").css('display', 'inline');

	});

	$('#btn_colores_mb').click( function(){

		volverDefault();

		$('#option_colores').css('display', 'block');

		$(this).find(".txt_btn_mb").css('color', '#3096fe');

		$(this).find(".img_default").css('display', 'none');
		$(this).find(".img_hover").css('display', 'inline');

	});

	$('#btn_numeros_mb').click( function(){

		volverDefault();
		
		$('#option_numeros').css('display', 'block');

		$(this).find(".txt_btn_mb").css('color', '#3096fe');

		$(this).find(".img_default").css('display', 'none');
		$(this).find(".img_hover").css('display', 'inline');

	});

	$('.btn_close').click( function(){

		volverDefault();

	});

	function volverDefault(){
		$('#option_estampados').css('display', 'none');
		$('#option_colores').css('display', 'none');
		$('#option_numeros').css('display', 'none');
		$('.img_default').css('display', 'inline');
		$('.img_hover').css('display', 'none');		
		$('.txt_btn_mb').css('color', '#a9a9a9');
	}

	/* BTN VER BACK MOBILE */

	var frente = true;

	$('#btn_mb_back').click( function(){

		$(this).toggleClass( 'btn_mb_back_sel' );
		$('.preview_front_mb').toggle();
		$('.preview_back_mb').toggle();

	});

	/* BTN PRECIO Y ENTREGA */

	$('#btn_mb_precio').click( function(){

		$('#content_base_mb').fadeOut( "fast", function() {
		   	$('#precio_entrega').fadeIn();
		 });		

	});

	/* BTN CLOSE PRECIO Y ENTREGA */

	$('.btn_close_precio_entrega').click( function(){

		$('#precio_entrega').fadeOut( "fast", function() {
		   	$('#content_base_mb').fadeIn();
		 });	

	});

	/* SELECT DISENO MOBILE */

	$('.sel_diseno_mb').click( function(){


		var option = this.id.split("diseno_mb_");

		var opt_diseno = option[1];

		var c_base = $('#option_color_base_mb').val();
		var c_prin = $('#option_color_principal_mb').val();
		var c_secu = $('#option_color_secundario_mb').val();
		
		$('#option_diseno_mb').val(opt_diseno);

		$('.preview_front_mb .img_base').attr('src', 'img/modelos/modelo_base/frente/'+c_base+'.png');
		$('.preview_back_mb .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+c_base+'.png');
		$('.preview_front_mb .img_principal').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_principal/frente/'+c_prin+'.png');
		$('.preview_back_mb .img_principal').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_principal/espalda/'+c_prin+'.png');

		if( secundario[opt_diseno] ){
			$('.preview_front_mb .img_secundaria').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_secundario/frente/'+c_secu+'.png');
			
			if( secundario_no_espalda[opt_diseno] ){
				$('.preview_back_mb .img_secundaria').attr('src', 'img/transparent.png');
			}else{
				$('.preview_back_mb .img_secundaria').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_secundario/espalda/'+c_secu+'.png');
			}
		}else{
			$('.preview_front_mb .img_secundaria').attr('src', 'img/transparent.png');
			$('.preview_back_mb .img_secundaria').attr('src', 'img/transparent.png');
		}


		// Pintar borde del seleccionado
		$('.sel_diseno_mb').removeClass("selected_mb");

		$(this).addClass("selected_mb");


		// Ocultar o mostrar opciones de colores principales y secundarios si estan disponibles en el modelo

		if( principal[opt_diseno] ){

			$('#color_principal_tit_mb').css('display', 'block');

		}else{
 	
 			$('#color_principal_tit_mb').css('display', 'none');

		}

		if( secundario[opt_diseno] ){

			$('#color_secundario_tit_mb').css('display', 'block');

		}else{
 	
 			$('#color_secundario_tit_mb').css('display', 'none');

		}

		// Oculto todos los paneles de colores y vuelvo todos los colores a deseleccionado

		$('.panel').css('display', 'none');
		$('#accordion span').css('color', '#8a8a8a');

	});


	/* SELECT COLOR BASE MOBILE */

	$('.sel_color_base_mb').click( function(){

		var nro_modelo = $('#option_diseno_mb').val();

		var option = this.id.split("color_base_mb_");
		
		$('#option_color_base_mb').val(option[1]);

		$('.preview_front_mb .img_base').attr('src', 'img/modelos/modelo_base/frente/'+option[1]+'.png');
		$('.preview_back_mb .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+option[1]+'.png');

	});

	/* SELECT COLOR PRINCIPAL MOBILE */

	$('.sel_color_principal_mb').click( function(){

		var nro_modelo = $('#option_diseno_mb').val();

		var option = this.id.split("color_principal_mb_");
		
		$('#option_color_principal_mb').val(option[1]);

		$('.preview_front_mb .img_principal').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_principal/frente/'+option[1]+'.png');
		$('.preview_back_mb .img_principal').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_principal/espalda/'+option[1]+'.png');

	});

	/* SELECT COLOR SECUNDARIO MOBILE */

	$('.sel_color_secundario_mb').click( function(){

		var nro_modelo = $('#option_diseno_mb').val();

		var option = this.id.split("color_secundario_mb_");
		
		$('#option_color_secundario_mb').val(option[1]);

		$('.preview_front_mb .img_secundaria').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_secundario/frente/'+option[1]+'.png');
		
		if( secundario_no_espalda[nro_modelo] ){
		
			$('.preview_back_mb .img_secundaria').attr('src', 'img/transparent.png');
		
		}else{
		
			$('.preview_back_mb .img_secundaria').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_secundario/espalda/'+option[1]+'.png');
		
		}

	});

	/* SELECT FORMATO MOBILE */

	$('.sel_formato_mb').click( function(){


		var option = this.id.split("formato_mb_");

		var opt = option[1];
		
		$('#option_formato_mb').val(opt);

		// Pintar borde del seleccionado
		$('.sel_formato_mb').removeClass("selected_mb");

		$(this).addClass("selected_mb");

		var opt_color = $('#option_color_text_mb').val();

		$('.formato_nro_back_mb img').attr('src', 'img/numeros/'+opt+'/'+opt_color+'.png');


		// Muestro vista de espalda

		$('#btn_mb_back').addClass('btn_mb_back_sel');
		$('.preview_front_mb').css('display', 'none');
		$('.preview_back_mb').css('display', 'block');

	});

	/* SELECT COLOR TEXT MOBILE */

	$('.sel_color_text_mb').click( function(){

		var opt = $('#option_formato_mb').val();

		var option = this.id.split("color_text_mb_");
		
		$('#option_color_text_mb').val(option[1]);

		$('.formato_nro_back_mb img').attr('src', 'img/numeros/'+opt+'/'+option[1]+'.png');


		// Muestro vista de espalda

		$('#btn_mb_back').addClass('btn_mb_back_sel');
		$('.preview_front_mb').css('display', 'none');
		$('.preview_back_mb').css('display', 'block');

	});

	/* BTN PEDIR MOBILE */

	$('#btn_pedir_mb').click( function(){

		$('#content_base_mb').fadeOut( "fast", function() {
		   	$('#formulario_mb').fadeIn();
		 });

	});

	/* BTN CLOSE FORMULARIO MOBILE */

	$('.btn_close_form_mb').click( function(){

		$('#formulario_mb').fadeOut( "fast", function() {
		   	$('#content_base_mb').fadeIn();
		 });

	});


	/* BTN ADD JUGADOR */

	$('#btn_add_jugador_mb').click( function(){

		var row_juador_mb = '<div class="box_jugador_mb"><div class="numero"><span>N&uacute;mero</span><input type="number" min="0" name="numero_jugador_mb[]" class="numero_jugador_mb" maxlength="3"></div><div class="talle"><span>Talle</span><select name="talle_jugador_mb[]" class="talle_jugador_mb"><option value="2">2</option><option value="4">4</option><option value="6">6</option><option value="8">8</option><option value="10">10</option><option value="12">12</option><option value="14">14</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select></div><div class="nombre"><span>Nombre</span> <span class="opcional">(opcional)</span><input type="text" name="nombre_jugador_mb[]" class="nombre_jugador_mb" /></div></div>';

		$('#list_jugadores_mb').append(row_juador_mb);

	});

	
	/* ACCORDION MOBILE */

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].onclick = function(){
	        /* Toggle between adding and removing the "active" class,
	        to highlight the button that controls the panel */
	        this.classList.toggle("active");

	        var paneles = document.getElementsByClassName("panel");

	        for(var j = 0; j < paneles.length; j++){
	        	paneles[j].style.display = 'none';
	        	if( j != i ){
	        		acc[j].style.color = '#8a8a8a';
	        	}
	        }

	        this.style.color = '#3096fe';

	        /* Toggle between hiding and showing the active panel */
	        var panel = this.nextElementSibling;
	        if (panel.style.display === "inline-block") {
	            panel.style.display = "none";
	        } else {
	            panel.style.display = "inline-block";
	        }
	    }
	}

	/* BTN HACER PEDIDO MOBILE */

	$("form#formulario_mb").submit(function(event){

		event.preventDefault();

		ga('send', 'event', 'Diseñador', 'confirmar diseno');

		var nombre_apellido = $('#nombre_mb').val();
		var email = $('#email_mb').val();
		var telefono = $('#telefono_mb').val();
		var comentario = $('#comentarios_mb').val();

		var row_jugador = $('.box_jugador_mb');

		var nombre_jugador = $('.nombre_jugador_mb');
		var numero_jugador = $('.numero_jugador_mb');

		var errorJugadores = true;

		for( var i = 0; i < row_jugador.length; i++ ){

			var nombre = nombre_jugador[i].value;
			var numero = numero_jugador[i].value;

			// if( nombre == "" ){
			// 	nombre_jugador[i].style.border = "1px solid #f51a1a";
			// 	errorJugadores = false;
			// }else{
			// 	nombre_jugador[i].style.border = "1px solid #afafaf";
			// }

			if( numero == "" ){
				numero_jugador[i].style.border = "1px solid #f51a1a";
				errorJugadores = false;
			}else{
				numero_jugador[i].style.border = "1px solid #afafaf";
			}

		}

		/* MINIMO 8 CAMISETAS - DESHACER ON CLICK */

		$('#back_form_min8').click( function(){

			$(this).css('display', 'none');

		});


		/* Verificaciones */ 

		var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var test = ( emailRegExp.test(email) );
		if( email == '' || !test ){

			$('#email_mb').css("border", "1px solid #f51a1a");

		}else{

			$('#email_mb').css("border", "1px solid #bdc4c9");

		}

		if( row_jugador.length < 8 ){

			$('#back_form_min8').css('display', 'block');

		}else{

			$('#back_form_min8').css('display', 'none');
			
		}

		if( email != '' && test && row_jugador.length >= 8 && errorJugadores ){

			var formData = new FormData($(this)[0]);

			$.ajax({
			    url: 'includes/inc.form_mb.php',
			    type: 'POST',
			    data: formData,
			    async: false,
			    cache: false,
			    contentType: false,
			    processData: false,
			    success: function (returndata) {
					$('.content_pedido_mb').fadeOut( "fast", function() {
					   	$('.content_pedido_finalizado_mb').fadeIn();
					  });
			    }
			});
			
		}

	});


});