// Actualizo vista cuando cambia de vista arquero / jugador

function updateVista(vista, secundario, secundario_no_espalda){

	var c_base;
	var c_prin;
	var c_secu;
	var opt_diseno;

	if( vista == "arquero" ){ // Configuracion arquero

		c_base = $('#option_color_base_arq').val();
		c_prin = $('#option_color_principal_arq').val();
		c_secu = $('#option_color_secundario_arq').val();
		opt_diseno = $('#option_diseno_arq').val();
		opt_formato = $('#option_formato_arq').val();
		opt_color = $('#option_color_text_arq').val();

		$('.formato_nro_back img').attr('src', 'img/numeros_arq/'+opt_formato+'/'+opt_color+'.png');

	}else{ // Configuracion jugador

		c_base = $('#option_color_base').val();
		c_prin = $('#option_color_principal').val();
		c_secu = $('#option_color_secundario').val();
		opt_diseno = $('#option_diseno').val();
		opt_formato = $('#option_formato').val();
		opt_color = $('#option_color_text').val();

		$('.formato_nro_back img').attr('src', 'img/numeros/'+opt_formato+'/'+opt_color+'.png');

	}

	// Ocultar o mostrar opciones de colores secundarios si estan disponibles en el modelo
	if( secundario[opt_diseno] ){
		$('#color_secundario_box').css('display', 'block');
	}else{
		$('#color_secundario_box').css('display', 'none');
	}

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

	}else{
		$('.preview_front .img_secundaria').attr('src', 'img/transparent.png');
		$('.preview_back .img_secundaria').attr('src', 'img/transparent.png');

		if( vista == "arquero" ){

			$('#option_color_secundario_arq').val(0);

		}else{

			$('#option_color_secundario').val(0);

		}
	}

}

// Actualizo diseno

function updateDiseno(vista, opt_diseno, secundario, secundario_no_espalda){

	var c_base;
	var c_prin;
	var c_secu;

	if( vista == "arquero" ){ // Configuracion arquero

		c_base = $('#option_color_base_arq').val();
		c_prin = $('#option_color_principal_arq').val();
		c_secu = $('#option_color_secundario_arq').val();
		
		$('#option_diseno_arq').val(opt_diseno);

	}else{ // Configuracion jugador

		c_base = $('#option_color_base').val();
		c_prin = $('#option_color_principal').val();
		c_secu = $('#option_color_secundario').val();
		
		$('#option_diseno').val(opt_diseno);

	}

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

}

// Actualizo la vista final cuando voy al formulario del pedido

function updateVistaFinal(secundario, secundario_no_espalda){

	// Arquero

	arq_c_base = $('#option_color_base_arq').val();
	arq_c_prin = $('#option_color_principal_arq').val();
	arq_c_secu = $('#option_color_secundario_arq').val();
	arq_opt_diseno = $('#option_diseno_arq').val();
	arq_opt_formato = $('#option_formato_arq').val();
	arq_opt_color = $('#option_color_text_arq').val();

	$('.vista_modelo_arquero .final_preview_front .img_base').attr('src', 'img/modelos/modelo_base/frente/'+arq_c_base+'.png');
	$('.vista_modelo_arquero .final_preview_back .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+arq_c_base+'.png');
	$('.vista_modelo_arquero .final_preview_front .img_principal').attr('src', 'img/modelos/modelo_'+arq_opt_diseno+'/color_principal/frente/'+arq_c_prin+'.png');
	$('.vista_modelo_arquero .final_preview_back .img_principal').attr('src', 'img/modelos/modelo_'+arq_opt_diseno+'/color_principal/espalda/'+arq_c_prin+'.png');

	if( secundario[arq_opt_diseno] ){
		if( arq_c_secu == 0 ){
			arq_c_secu = 9;
		}

		$('.vista_modelo_arquero .final_preview_front .img_secundaria').attr('src', 'img/modelos/modelo_'+arq_opt_diseno+'/color_secundario/frente/'+arq_c_secu+'.png');
			
		if( secundario_no_espalda[arq_opt_diseno] ){
			$('.vista_modelo_arquero .final_preview_back .img_secundaria').attr('src', 'img/transparent.png');
		}else{
			$('.vista_modelo_arquero .final_preview_back .img_secundaria').attr('src', 'img/modelos/modelo_'+arq_opt_diseno+'/color_secundario/espalda/'+arq_c_secu+'.png');
		}

	}else{
		$('.vista_modelo_arquero .final_preview_front .img_secundaria').attr('src', 'img/transparent.png');
		$('.vista_modelo_arquero .final_preview_back .img_secundaria').attr('src', 'img/transparent.png');
	}

	$('.vista_modelo_arquero .final_preview_back .formato_nro_back img').attr('src', 'img/numeros_arq/'+arq_opt_formato+'/'+arq_opt_color+'.png');


	// Jugador

	jug_c_base = $('#option_color_base').val();
	jug_c_prin = $('#option_color_principal').val();
	jug_c_secu = $('#option_color_secundario').val();
	jug_opt_diseno = $('#option_diseno').val();
	jug_opt_formato = $('#option_formato').val();
	jug_opt_color = $('#option_color_text').val();

	$('.vista_modelo_jugador .final_preview_front .img_base').attr('src', 'img/modelos/modelo_base/frente/'+jug_c_base+'.png');
	$('.vista_modelo_jugador .final_preview_back .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+jug_c_base+'.png');
	$('.vista_modelo_jugador .final_preview_front .img_principal').attr('src', 'img/modelos/modelo_'+jug_opt_diseno+'/color_principal/frente/'+jug_c_prin+'.png');
	$('.vista_modelo_jugador .final_preview_back .img_principal').attr('src', 'img/modelos/modelo_'+jug_opt_diseno+'/color_principal/espalda/'+jug_c_prin+'.png');

	if( secundario[jug_opt_diseno] ){
		if( jug_c_secu == 0 ){
			jug_c_secu = 9;
		}

		$('.vista_modelo_jugador .final_preview_front .img_secundaria').attr('src', 'img/modelos/modelo_'+jug_opt_diseno+'/color_secundario/frente/'+jug_c_secu+'.png');
			
		if( secundario_no_espalda[jug_opt_diseno] ){
			$('.vista_modelo_jugador .final_preview_back .img_secundaria').attr('src', 'img/transparent.png');
		}else{
			$('.vista_modelo_jugador .final_preview_back .img_secundaria').attr('src', 'img/modelos/modelo_'+jug_opt_diseno+'/color_secundario/espalda/'+jug_c_secu+'.png');
		}

	}else{
		$('.vista_modelo_jugador .final_preview_front .img_secundaria').attr('src', 'img/transparent.png');
		$('.vista_modelo_jugador .final_preview_back .img_secundaria').attr('src', 'img/transparent.png');
	}

	$('.vista_modelo_jugador .final_preview_back .formato_nro_back img').attr('src', 'img/numeros/'+jug_opt_formato+'/'+jug_opt_color+'.png');

}


//*******  MOBILE  *******//

// Actualizo vista cuando cambia de vista arquero / jugador

function updateVistaMb(vista, secundario, secundario_no_espalda){

	var c_base;
	var c_prin;
	var c_secu;
	var opt_diseno;

	if( vista == "arquero" ){ // Configuracion arquero

		c_base = $('#option_color_base_arq_mb').val();
		c_prin = $('#option_color_principal_arq_mb').val();
		c_secu = $('#option_color_secundario_arq_mb').val();
		opt_diseno = $('#option_diseno_arq_mb').val();
		opt_formato = $('#option_formato_arq_mb').val();
		opt_color = $('#option_color_text_arq_mb').val();
		$('#list_formato_mb').css('display', 'none');
		$('#list_formato_arq_mb').css('display', 'inline-block');

		$('.formato_nro_back_mb img').attr('src', 'img/numeros_arq/'+opt_formato+'/'+opt_color+'.png');

	}else{ // Configuracion jugador

		c_base = $('#option_color_base_mb').val();
		c_prin = $('#option_color_principal_mb').val();
		c_secu = $('#option_color_secundario_mb').val();
		opt_diseno = $('#option_diseno_mb').val();
		opt_formato = $('#option_formato_mb').val();
		opt_color = $('#option_color_text_mb').val();
		$('#list_formato_mb').css('display', 'inline-block');
		$('#list_formato_arq_mb').css('display', 'none');

		$('.formato_nro_back_mb img').attr('src', 'img/numeros/'+opt_formato+'/'+opt_color+'.png');

	}

	// Ocultar o mostrar opciones de colores secundarios si estan disponibles en el modelo
	if( secundario[opt_diseno] ){
		$('#color_secundario_box_mb').css('display', 'block');
		$('#color_secundario_tit_mb').css('display', 'block');
	}else{
		$('#color_secundario_box_mb').css('display', 'none');
		$('#color_secundario_tit_mb').css('display', 'none');
	}

	$('.preview_front_mb .img_base').attr('src', 'img/modelos/modelo_base/frente/'+c_base+'.png');
	$('.preview_back_mb .img_base').attr('src', 'img/modelos/modelo_base/espalda/'+c_base+'.png');
	$('.preview_front_mb .img_principal').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_principal/frente/'+c_prin+'.png');
	$('.preview_back_mb .img_principal').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_principal/espalda/'+c_prin+'.png');

	if( secundario[opt_diseno] ){
		if( c_secu == 0 ){
			c_secu = 9;
		}

		$('.preview_front_mb .img_secundaria').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_secundario/frente/'+c_secu+'.png');
			
		if( secundario_no_espalda[opt_diseno] ){
			$('.preview_back_mb .img_secundaria').attr('src', 'img/transparent.png');
		}else{
			$('.preview_back_mb .img_secundaria').attr('src', 'img/modelos/modelo_'+opt_diseno+'/color_secundario/espalda/'+c_secu+'.png');
		}

	}else{
		$('.preview_front_mb .img_secundaria').attr('src', 'img/transparent.png');
		$('.preview_back_mb .img_secundaria').attr('src', 'img/transparent.png');

		if( vista == "arquero" ){

			if( opt_diseno == 1 ){
				$('#option_color_secundario_arq_mb').val(9);
			}else{
				$('#option_color_secundario_arq_mb').val(0);
			}
				
		}else{

			if( opt_diseno == 1 ){
				$('#option_color_secundario_mb').val(9);
			}else{
				$('#option_color_secundario_mb').val(0);
			}

		}
	}

}

// Actualizo diseno

function updateDisenoMb(vista, opt_diseno, secundario, secundario_no_espalda){

	var c_base;
	var c_prin;
	var c_secu;

	if( vista == "arquero" ){ // Configuracion arquero

		c_base = $('#option_color_base_arq_mb').val();
		c_prin = $('#option_color_principal_arq_mb').val();
		c_secu = $('#option_color_secundario_arq_mb').val();
		
		$('#option_diseno_arq_mb').val(opt_diseno);

	}else{ // Configuracion jugador

		c_base = $('#option_color_base_mb').val();
		c_prin = $('#option_color_principal_mb').val();
		c_secu = $('#option_color_secundario_mb').val();
		
		$('#option_diseno_mb').val(opt_diseno);

	}

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

}