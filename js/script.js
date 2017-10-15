$( document ).ready( function(){

	/* OPTIONS */

		/* Colores disponibles por modelo */

	var principal = [];
	var secundario = [];
	var secundario_no_espalda = [];
	var formato = [];
	
	principal[1] = true;
	secundario[1] = false;

	principal[2] = true;
	secundario[2] = false;

	principal[3] = true;
	secundario[3] = true;

	principal[4] = true;
	secundario[4] = true;
	secundario_no_espalda[4] = true; // true si no tiene secundario en espalda

	principal[5] = true;
	secundario[5] = true;

	principal[6] = true;
	secundario[6] = true;

	principal[7] = true;
	secundario[7] = true;

	principal[8] = true;
	secundario[8] = true;

	principal[9] = true;
	secundario[9] = true;

		/* Formatos disponibles */

	formato[1] = 'Arial';
	formato[2] = 'Times New Roman';
	formato[3] = 'Comic Sans MS';
	formato[4] = 'Trebuchet MS';


 	/* NAV OPTIONS */

	$('#btn_diseno').click( function(){

		$('#options_diseno').css('display', 'block');
		$('#options_colores').css('display', 'none');
		$('#options_texto').css('display', 'none');

		$('#btn_diseno').removeClass().addClass('option_select');
		$('#btn_colores').removeClass().addClass('option_disable');
		$('#btn_numeros').removeClass().addClass('option_disable');

	});
	$('#btn_colores').click( function(){

		$('#options_diseno').css('display', 'none');
		$('#options_colores').css('display', 'block');
		$('#options_texto').css('display', 'none');

		$('#btn_diseno').removeClass().addClass('option_disable');
		$('#btn_colores').removeClass().addClass('option_select');
		$('#btn_numeros').removeClass().addClass('option_disable');

	});
	$('#btn_numeros').click( function(){

		$('#options_diseno').css('display', 'none');
		$('#options_colores').css('display', 'none');
		$('#options_texto').css('display', 'block');

		$('#btn_diseno').removeClass().addClass('option_disable');
		$('#btn_colores').removeClass().addClass('option_disable');
		$('#btn_numeros').removeClass().addClass('option_select');

	});



	/* SELECT DISENO */

	$('.sel_diseno').click( function(){


		var option = this.id.split("diseno_");

		var opt_diseno = option[1];

		var c_base = $('#option_color_base').val();
		var c_prin = $('#option_color_principal').val();
		var c_secu = $('#option_color_secundario').val();
		
		$('#option_diseno').val(opt_diseno);

		$('.preview_front .img_base').attr('src', 'img/modelos/modelo_base/frente/'+c_base+'.png');
		$('.preview_back .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+c_base+'.png');
		$('.preview_front .img_principal').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_principal/frente/'+c_prin+'.png');
		$('.preview_back .img_principal').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_principal/espalda/'+c_prin+'.png');

		if( secundario[opt_diseno] ){
			if( c_secu == 0 ){
				c_secu = 9;
			}

			$('.preview_front .img_secundaria').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_secundario/frente/'+c_secu+'.png');
				
			if( secundario_no_espalda[opt_diseno] ){
				$('.preview_back .img_secundaria').attr('src', 'img/transparent.png');
			}else{
				$('.preview_back .img_secundaria').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_secundario/espalda/'+c_secu+'.png');
			}
			$('#option_color_secundario').val(9);
		}else{
			$('.preview_front .img_secundaria').attr('src', 'img/transparent.png');
			$('.preview_back .img_secundaria').attr('src', 'img/transparent.png');
			$('#option_color_secundario').val(0);
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

	/* SELECT COLOR BASE */

	$('.sel_color_base').click( function(){

		var nro_modelo = $('#option_diseno').val();

		var option = this.id.split("color_base_");
		
		$('#option_color_base').val(option[1]);

		$('.preview_front .img_base').attr('src', 'img/modelos/modelo_base/frente/'+option[1]+'.png');
		$('.preview_back .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+option[1]+'.png');

	});

	/* SELECT COLOR PRINCIPAL */

	$('.sel_color_principal').click( function(){

		var nro_modelo = $('#option_diseno').val();

		var option = this.id.split("color_principal_");
		
		$('#option_color_principal').val(option[1]);

		$('.preview_front .img_principal').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_principal/frente/'+option[1]+'.png');
		$('.preview_back .img_principal').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_principal/espalda/'+option[1]+'.png');

	});

	/* SELECT COLOR SECUNDARIO */

	$('.sel_color_secundario').click( function(){

		var nro_modelo = $('#option_diseno').val();

		var option = this.id.split("color_secundario_");
		
		$('#option_color_secundario').val(option[1]);

		$('.preview_front .img_secundaria').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_secundario/frente/'+option[1]+'.png');
		
		if( secundario_no_espalda[opt_diseno] ){
		
			$('.preview_back .img_secundaria').attr('src', 'img/transparent.png');
		
		}else{
		
			$('.preview_back .img_secundaria').attr('src', 'img/modelos/modelo_'+nro_modelo+'/color_secundario/espalda/'+option[1]+'.png');
		
		}

	});

	/* SELECT FORMATO */

	$('.sel_formato').click( function(){


		var option = this.id.split("formato_");

		var opt = option[1];
		
		$('#option_formato').val(opt);

		// Pintar borde del seleccionado
		$('.sel_formato').removeClass("selected");

		$(this).addClass("selected");

		$('.nombre_back').css('font-family', formato[opt]);
		$('.numero_back').css('font-family', formato[opt]);

	});

	/* SELECT COLOR TEXT */

	$('.sel_color_text').click( function(){


		var option = this.id.split("color_text_");
		
		$('#option_color_text').val(option[1]);

		var color = $(this).css('backgroundColor');

		$('.nombre_back').css('color', color);
		$('.numero_back').css('color', color);

	});

	/* CHECKBOX SIN NOMBRE */

	$("#btn_sin_nombre").change(function() {
	    if(this.checked) {
	    	$('#option_nombre').val(0);
	    	$('.nombre_back').css('display', 'none');
	    }else{
	    	$('#option_nombre').val(1);
	    	$('.nombre_back').css('display', 'block');
	    }
	});



	/* BTN CONFIRMAR DISENO */

	$('#btn_confirmar').click( function(){

		$('#disenador').fadeOut( "slow", function() {

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

		var row_jugador = '<div class="row_jugador"><label>NOMBRE: <input type="text" name="nombre_jugador[]" class="nombre_jugador" /></label><label>N&ordm;: <input type="number" min="0" name="numero_jugador[]" class="numero_jugador" maxlength="3" /></label><label>TALLE: <select name="talle_jugador[]" class="talle_jugador"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option></select></label><span class="btn_delete">X</span></div>';

		$('#list_jugadores').append(row_jugador);

	});

	   /* Delete Jugador */

	$(document).on('click','.btn_delete',function() {
		$(this).parent().remove();
	});


	/* ENVIAR PEDIDO */

	$("form#formulario").submit(function(event){

		event.preventDefault();

		var diseno = $('#option_diseno').val();
		var color_base = $('#option_color_base').val();
		var color_principal = $('#option_color_principal').val();
		var color_secundario = $('#option_color_secundario').val();
		var formato = $('#option_formato').val();
		var nombre = $('#option_nombre').val();
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

			if( nombre == "" ){
				nombre_jugador[i].style.border = "1px solid #f51a1a";
				errorJugadores = false;
			}else{
				nombre_jugador[i].style.border = "1px solid #afafaf";
			}

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

		// if( email != '' && test && nombre_apellido != '' && row_jugador.length >= 8 && errorJugadores ){

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
			
		// }

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
		
		if( secundario_no_espalda[opt_diseno] ){
		
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

		$('.nombre_back_mb').css('font-family', formato[opt]);
		$('.numero_back_mb').css('font-family', formato[opt]);


		// Muestro vista de espalda

		$('#btn_mb_back').addClass('btn_mb_back_sel');
		$('.preview_front_mb').css('display', 'none');
		$('.preview_back_mb').css('display', 'block');

	});

	/* SELECT COLOR TEXT MOBILE */

	$('.sel_color_text_mb').click( function(){


		var option = this.id.split("color_text_mb_");
		
		$('#option_color_text_mb').val(option[1]);

		var color = $(this).css('backgroundColor');

		$('.nombre_back_mb').css('color', color);
		$('.numero_back_mb').css('color', color);


		// Muestro vista de espalda

		$('#btn_mb_back').addClass('btn_mb_back_sel');
		$('.preview_front_mb').css('display', 'none');
		$('.preview_back_mb').css('display', 'block');

	});

	/* CHECKBOX SIN NOMBRE MOBILE */

	$("#btn_sin_nombre_mb").change(function() {
	    if(this.checked) {
	    	$('#option_nombre_mb').val(0);
	    	$('.nombre_back_mb').css('display', 'none');
	    }else{
	    	$('#option_nombre_mb').val(1);
	    	$('.nombre_back_mb').css('display', 'block');
	    }
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

		var row_juador_mb = '<div class="box_jugador_mb"><div class="numero"><span>N&uacute;mero</span><input type="number" min="0" name="numero_jugador_mb[]" class="numero_jugador_mb" maxlength="3"></div><div class="talle"><span>Talle</span><select name="talle_jugador_mb[]" class="talle_jugador_mb"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option></select></div><div class="nombre"><span>Nombre</span> <span class="opcional">(opcional)</span><input type="text" name="nombre_jugador_mb[]" class="nombre_jugador_mb" /></div></div>';

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

			if( nombre == "" ){
				nombre_jugador[i].style.border = "1px solid #f51a1a";
				errorJugadores = false;
			}else{
				nombre_jugador[i].style.border = "1px solid #afafaf";
			}

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