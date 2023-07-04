/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};
//*************************************************************
//Original Ardublockly blocks where replaced by DB4K blocks ( Modified by RLQ DB4K)

Ardublockly.TOOLBOX_XML =
'<xml>'+
'  <sep></sep>' +
'  <category name="Controle">' +
'  		<block type="delay"></block>' +
'		<block type="repetir"></block>' +
'		<block type="enquanto"></block>' +
'	    <block type="condicional_simples"></block>' +
'	    <block type="condicional_completo"></block>' +
'		<block type="parar_repeticao_do_programa"></block>' +
' </category>' +
'  <sep_strong></sep_strong>' +
'    <category name="LED">' +
'		<block type="acender_led"></block>' +
'		<block type="apagar_led"></block>' +
'		<block type="piscar_led"></block>' +
'		<block type="led_rgb"></block>' +
'		<block type="acender_ledS"></block>' +
'		<block type="apagar_ledS"></block>' +
'		<block type="piscar_ledS"></block>' +
'	</category>' +
'	<sep></sep>' +
' 	<category name="Motores">' +
'	    <block type="mover_servomotor"></block>' +
'		<block type="girar_motor"></block>' +
'		<block type="parar_motor"></block>' +
'	</category>' +
'   <sep></sep>' +
'    <category name="Display">' +
'		<block type="escrever_lcd"></block>' +
'		<block type="limpar_lcd"></block>' +
'		<block type="escrever_display_7s"></block>' +
'		<block type="limpar_display_7s"></block>' +
'	</category>' +
'	<sep></sep>' +
'	<category name="Som">' +
'		<block type="tocar_nota_buzzer"></block>' +
'		<block type="parar_som_buzzer"></block>' +
'	    <block type="tocar_sirene_buzzer"></block>' +
'	</category>' +
'	<sep></sep>' +
'	<category name="Sensores">' +
// '	    <block type="sensor_temperatura"></block>' +
'		<block type="sensor_distancia"></block>' +
'	    <block type="sensor_luz"></block>' +
'	    <block type="sensor_linha"></block>' +
'		<block type="potenciometro"></block>'+
'		<block type="sensor_toque"></block>' +
//' 		<block type="sensor_cor"></block>' +
'	</category>' +
'    <sep_strong></sep_strong>' +
'	<category name="Carrinho">' +
'  		<block type="mover_carrinho_para_frente"></block>' +
'		<block type="mover_carrinho_para_tras"></block>' +
'		<block type="virar_carrinho_para_direita"></block>' +
'		<block type="virar_carrinho_para_esquerda"></block>' +
'		<block type="virar_carrinho_para_esquerda_ou_direita"></block>' +
'		<block type="parar_carrinho"></block>' +	
'	    <block type="finalizar_circuito"></block>' +	
'	</category>' +
' <sep_strong></sep_strong>' +
'	<category name="Braço">' +
' 		<block type="inicializar_braco"></block>' +
'		<block type="girar_braco_robotico_direita"></block>' +
'		<block type="girar_braco_robotico_esquerda"></block>' +
'		<block type="centralizar_braco_robotico"></block>' +
'		<block type="pegar_objeto"></block>' +
'		<block type="soltar_objeto"></block>' +
'		<block type="finalizar_braco"></block>' +
'	</category>' +
'    <sep></sep>' +

'</xml>';
//-----------------------------------------------------------------------------
