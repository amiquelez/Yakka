$( document ).ready( function(){


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
		
		$('#option_diseno').val(option[1]);

	});

	/* SELECT COLOR BASE */

	$('.sel_color_base').click( function(){


		var option = this.id.split("color_base_");
		
		$('#option_color_base').val(option[1]);

	});

	/* SELECT COLOR PRINCIPAL */

	$('.sel_color_principal').click( function(){


		var option = this.id.split("color_principal_");
		
		$('#option_color_principal').val(option[1]);

	});

	/* SELECT COLOR SECUNDARIO */

	$('.sel_color_secundario').click( function(){


		var option = this.id.split("color_secundario_");
		
		$('#option_color_secundario').val(option[1]);

	});

	/* SELECT FORMATO */

	$('.sel_formato').click( function(){


		var option = this.id.split("formato_");
		
		$('#option_formato').val(option[1]);

	});

	/* SELECT COLOR TEXT */

	$('.sel_color_text').click( function(){


		var option = this.id.split("color_text_");
		
		$('#option_color_text').val(option[1]);

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


});