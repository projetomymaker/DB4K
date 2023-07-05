/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Code for DBK special Blocks.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Arduino.atuadores');
goog.require('Blockly.Arduino');

//--------------------------------------------
//Generators included by RLQ - DB4K
//--------------------------------------------

//******************************************************
//Inicializa Pinos etc.
//*******************************************************

// Carrega os valores dos pinos do arquivo DB4K_setup.ini 
//para as variáveis globais DB4k_pino_xxxxxx

//Define os pinos utilizados pelos LEDs
var pinoLedVermelho = DB4K_pino_LED_vermelho;
var pinoLedAmarelo = DB4K_pino_LED_amarelo;
var pinoLedVerde = DB4K_pino_LED_verde;
var pinoLedVermelho2 = DB4K_pino_LED_vermelho2;
var pinoLedAmarelo2 = DB4K_pino_LED_amarelo2;
var pinoLedVerde2 = DB4K_pino_LED_verde2;
var pinoLedVermelhoS = DB4K_pino_LED_vermelhoS;
var pinoLedAmareloS = DB4K_pino_LED_amareloS;
var pinoLedVerdeS = DB4K_pino_LED_verdeS;


//Define velocidade da piscada do LED
var velocidade_baixa_blink=DB4K_velocidade_baixa_blink;
var velocidade_media_blink=DB4K_velocidade_media_blink;
var velocidade_alta_blink=DB4K_velocidade_alta_blink;

//Define pinos do LED RGB

var pino_rgb_vermelho = DB4K_pino_RGB_vermelho;
var pino_rgb_verde = DB4K_pino_RGB_verde;
var pino_rgb_azul = DB4K_pino_RGB_azul;
var pino_rgb_vermelho = DB4K_pino_RGB_vermelho;
var pino_rgb_verde = DB4K_pino_RGB_verde;
var pino_rgb_azul = DB4K_pino_RGB_azul;

//Define o pino utilizado pelo servo motor
var pinoServoMotor = DB4K_pino_Servo_Motor;

//define o pino (PWM) e outras variáveis utilizadas pelo Modot DC
var pinoMotorDC = DB4K_pino_MotorDC;
var velocidade_baixa_motorDC=DB4K_velocidade_baixa_motorDC;
var velocidade_media_motorDC=DB4K_velocidade_media_motorDC;
var velocidade_alta_motorDC=DB4K_velocidade_alta_motorDC;

//Define pinos e outras variáveis utilizadas para o display LCD

var nomeLCD = 'lcd';
var nomeSerial = 'Serial'
var velocidadeSerial = DB4K_velocidade_serial;

var pino_rs = DB4K_pino_rs;
var pino_rw = DB4K_pino_rw;
var pino_enable = DB4K_pino_enable;
var pino_dados_4 = DB4K_pino_dados_4;
var pino_dados_5 = DB4K_pino_dados_5; 
var pino_dados_6 = DB4K_pino_dados_6;
var pino_dados_7 = DB4K_pino_dados_7;

var tamanho_linha_lcd = DB4K_tamanho_linha_LCD;
var numero_linhas_lcd = '2';

//Define pinos no Display de 7 segmentos

var pino_segmento_F = DB4K_pino_segmento_F;
var pino_segmento_G = DB4K_pino_segmento_G;
var pino_segmento_E = DB4K_pino_segmento_E;
var pino_segmento_D = DB4K_pino_segmento_D;
var pino_segmento_A = DB4K_pino_segmento_A;
var pino_segmento_B = DB4K_pino_segmento_B;
var pino_segmento_C = DB4K_pino_segmento_C;
var pino_ponto_decimal = DB4K_pino_ponto_decimal;

//Define pino e outras variáveis para o buzzer
var pino_buzzer = DB4K_pino_buzzer;
var tempo_sirene=10;
//*****************************************************************************

//*******************************************************
//Acende LED
//*******************************************************



Blockly.Arduino['acender_led'] = function(block) {
  var colour_cor_led = block.getFieldValue('cor_led');
  var dropdown_porta_led = block.getFieldValue('porta_led');
//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(colour_cor_led) {
		case '#ff0000':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_vermelho";
					var pinLed = pinoLedVermelho;
					Blockly.Arduino.definitions_['pino_led_vermelho'] ='int pino_led_vermelho= '+ pinoLedVermelho +';'
					break;
				case '2':
					var pinKey = "pino_led_vermelho2";
					var pinLed = pinoLedVermelho2;
					Blockly.Arduino.definitions_['pino_led_vermelho2'] ='int pino_led_vermelho2= '+ pinoLedVermelho2 +';'
					break;
			}
			break;
		case '#00ff00':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_verde";
					var pinLed = pinoLedVerde;
					Blockly.Arduino.definitions_['pino_led_verde'] ='int pino_led_verde= '+ pinoLedVerde +';'
					break;
				case '2':
					var pinKey = "pino_led_verde2";
					var pinLed = pinoLedVerde2;
					Blockly.Arduino.definitions_['pino_led_verde2'] ='int pino_led_verde2= '+ pinoLedVerde2 +';'
					break;
			}
			break;
		case '#0000ff':
			var pinKey = "pino_led_azul";
			var pinLed = pinoLedAzul;
			Blockly.Arduino.definitions_['pino_led_azul'] ='int pino_led_azul= '+ pinoLedAzul +';'
			break;		
		case '#ffff00':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_amarelo";
					var pinLed = pinoLedAmarelo;
					Blockly.Arduino.definitions_['pino_led_amarelo'] ='int pino_led_amarelo= '+ pinoLedAmarelo +';'
					break;
				case '2':
					var pinKey = "pino_led_amarelo2";
					var pinLed = pinoLedAmarelo2;
					Blockly.Arduino.definitions_['pino_led_amarelo2'] ='int pino_led_amarelo2= '+ pinoLedAmarelo2 +';'
					break;
			}
			break;		
	}
  // TODO: Assemble Arduino into code variable.
  var stateOutput = 'HIGH';

  Blockly.Arduino.reservePin(
      block, pinLed, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	  
  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);

  var code = 'digitalWrite(' + pinKey + ',' + stateOutput + ');\n';
  return code;
 
};

Blockly.Arduino['acender_ledS'] = function(block) {
	var colour_cor_led = block.getFieldValue('cor_led');
  //Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	  switch(colour_cor_led) {
		  case '#ff0000':
					  var pinKey = "pino_led_vermelho";
					  var pinLed = pinoLedVermelhoS;
					  Blockly.Arduino.definitions_['pino_led_vermelho'] ='int pino_led_vermelho= '+ pinoLedVermelhoS +';'
					  break;
		  case '#00ff00':
					  var pinKey = "pino_led_verde";
					  var pinLed = pinoLedVerdeS;
					  Blockly.Arduino.definitions_['pino_led_verde'] ='int pino_led_verde= '+ pinoLedVerdeS +';'
					  break;	
		  case '#ffff00':
					  var pinKey = "pino_led_amarelo";
					  var pinLed = pinoLedAmareloS;
					  Blockly.Arduino.definitions_['pino_led_amarelo'] ='int pino_led_amarelo= '+ pinoLedAmareloS +';'
					  break;
			  break;		
	  }
	// TODO: Assemble Arduino into code variable.
	var stateOutput = 'HIGH';
  
	Blockly.Arduino.reservePin(
		block, pinLed, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
		
	var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
	Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);
  
	var code = 'digitalWrite(' + pinKey + ',' + stateOutput + ');\n';
	return code;
   
  };


//*******************************************************
//Apaga LED
//*******************************************************

Blockly.Arduino['apagar_led'] = function(block) {
  var colour_cor_led = block.getFieldValue('cor_led');
  var dropdown_porta_led = block.getFieldValue('porta_led');
//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(colour_cor_led) {
		case '#ff0000':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_vermelho";
					var pinLed = pinoLedVermelho;
					Blockly.Arduino.definitions_['pino_led_vermelho'] ='int pino_led_vermelho= '+ pinoLedVermelho +';'
					break;
				case '2':
					var pinKey = "pino_led_vermelho2";
					var pinLed = pinoLedVermelho2;
					Blockly.Arduino.definitions_['pino_led_vermelho2'] ='int pino_led_vermelho2= '+ pinoLedVermelho2 +';'
					break;
			}
			break;
		case '#00ff00':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_verde";
					var pinLed = pinoLedVerde;
					Blockly.Arduino.definitions_['pino_led_verde'] ='int pino_led_verde= '+ pinoLedVerde +';'
					break;
				case '2':
					var pinKey = "pino_led_verde2";
					var pinLed = pinoLedVerde2;
					Blockly.Arduino.definitions_['pino_led_verde2'] ='int pino_led_verde2= '+ pinoLedVerde2 +';'
					break;
			}
			break;
		case '#0000ff':
			var pinKey = "pino_led_azul";
			var pinLed = pinoLedAzul;
			Blockly.Arduino.definitions_['pino_led_azul'] ='int pino_led_azul= '+ pinoLedAzul +';'
			break;		
		case '#ffff00':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_amarelo";
					var pinLed = pinoLedAmarelo;
					Blockly.Arduino.definitions_['pino_led_amarelo'] ='int pino_led_amarelo= '+ pinoLedAmarelo +';'
					break;
				case '2':
					var pinKey = "pino_led_amarelo2";
					var pinLed = pinoLedAmarelo2;
					Blockly.Arduino.definitions_['pino_led_amarelo2'] ='int pino_led_amarelo2= '+ pinoLedAmarelo2 +';'
					break;
			}
			break;		
	}
  // TODO: Assemble Arduino into code variable.
  var stateOutput = 'LOW';

  Blockly.Arduino.reservePin(
      block, pinLed, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);

  var code = 'digitalWrite(' + pinKey + ',' + stateOutput + ');\n';
  return code;
};

Blockly.Arduino['apagar_ledS'] = function(block) {
	var colour_cor_led = block.getFieldValue('cor_led');

  //Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	  switch(colour_cor_led) {
		  case '#ff0000':
					  var pinKey = "pino_led_vermelho";
					  var pinLed = pinoLedVermelhoS;
					  Blockly.Arduino.definitions_['pino_led_vermelho'] ='int pino_led_vermelho= '+ pinoLedVermelhoS +';'
					  break;

		  case '#00ff00':

					  var pinKey = "pino_led_verde";
					  var pinLed = pinoLedVerdeS;
					  Blockly.Arduino.definitions_['pino_led_verde'] ='int pino_led_verde= '+ pinoLedVerdeS +';'
					  break;
	
		  case '#ffff00':
					  var pinKey = "pino_led_amarelo";
					  var pinLed = pinoLedAmareloS;
					  Blockly.Arduino.definitions_['pino_led_amarelo'] ='int pino_led_amarelo= '+ pinoLedAmareloS +';'
					  break;

	  }
	// TODO: Assemble Arduino into code variable.
	var stateOutput = 'LOW';
  
	Blockly.Arduino.reservePin(
		block, pinLed, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  
	var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
	Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);
  
	var code = 'digitalWrite(' + pinKey + ',' + stateOutput + ');\n';
	return code;
  };
  


//*******************************************************
//Pisca LED
//*******************************************************

Blockly.Arduino['piscar_led'] = function(block) {
  var colour_cor_led = block.getFieldValue('cor_led');
  var dropdown_porta_led = block.getFieldValue('porta_led');
  var dropdown_velocidade_blink = block.getFieldValue('velocidade_blink');
  
//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(colour_cor_led) {
		case '#ff0000':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_vermelho";
					var pinLed = pinoLedVermelho;
					Blockly.Arduino.definitions_['pino_led_vermelho'] ='int pino_led_vermelho= '+ pinoLedVermelho +';'
					break;
				case '2':
					var pinKey = "pino_led_vermelho2";
					var pinLed = pinoLedVermelho2;
					Blockly.Arduino.definitions_['pino_led_vermelho2'] ='int pino_led_vermelho2= '+ pinoLedVermelho2 +';'
					break;
			}
			break;
		case '#00ff00':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_verde";
					var pinLed = pinoLedVerde;
					Blockly.Arduino.definitions_['pino_led_verde'] ='int pino_led_verde= '+ pinoLedVerde +';'
					break;
				case '2':
					var pinKey = "pino_led_verde2";
					var pinLed = pinoLedVerde2;
					Blockly.Arduino.definitions_['pino_led_verde2'] ='int pino_led_verde2= '+ pinoLedVerde2 +';'
					break;
			}
			break;
		case '#0000ff':
			var pinKey = "pino_led_azul";
			var pinLed = pinoLedAzul;
			Blockly.Arduino.definitions_['pino_led_azul'] ='int pino_led_azul= '+ pinoLedAzul +';'
			break;		
		case '#ffff00':
			switch(dropdown_porta_led){
				case '1':
					var pinKey = "pino_led_amarelo";
					var pinLed = pinoLedAmarelo;
					Blockly.Arduino.definitions_['pino_led_amarelo'] ='int pino_led_amarelo= '+ pinoLedAmarelo +';'
					break;
				case '2':
					var pinKey = "pino_led_amarelo2";
					var pinLed = pinoLedAmarelo2;
					Blockly.Arduino.definitions_['pino_led_amarelo2'] ='int pino_led_amarelo2= '+ pinoLedAmarelo2 +';'
					break;
			}
			break;		
	}
	
	  switch(dropdown_velocidade_blink) {
		case 'low':
			var velocidade_blink = velocidade_baixa_blink;
			break;
		case 'middle':
			var velocidade_blink = velocidade_media_blink
			break;
		case 'high':
			var velocidade_blink = velocidade_alta_blink;
			break;	
    }
  var value_num = velocidade_blink;
  // TODO: Assemble Arduino into code variable.

  Blockly.Arduino.reservePin(
      block, pinLed, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	  
  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);

  var code = 'digitalWrite(' + pinKey + ',HIGH);\n'
           + 'delay(' + value_num + ');\n'
		   + 'digitalWrite(' + pinKey + ',LOW);\n'
		   + 'delay(' + value_num + ');\n';
  return code;
 
};

Blockly.Arduino['piscar_ledS'] = function(block) {
	var colour_cor_led = block.getFieldValue('cor_led');
	var dropdown_velocidade_blink = block.getFieldValue('velocidade_blink');
	
  //Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	  switch(colour_cor_led) {
		  case '#ff0000':
					  var pinKey = "pino_led_vermelho";
					  var pinLed = pinoLedVermelhoS;
					  Blockly.Arduino.definitions_['pino_led_vermelho'] ='int pino_led_vermelho= '+ pinoLedVermelhoS +';'
					  break;

		  case '#00ff00':
	
					  var pinKey = "pino_led_verde";
					  var pinLed = pinoLedVerdeS;
					  Blockly.Arduino.definitions_['pino_led_verde'] ='int pino_led_verde= '+ pinoLedVerdeS +';'
					  break;

		  case '#ffff00':
					  var pinKey = "pino_led_amarelo";
					  var pinLed = pinoLedAmareloS;
					  Blockly.Arduino.definitions_['pino_led_amarelo'] ='int pino_led_amarelo= '+ pinoLedAmareloS +';'
					  break;


	  }
	  
		switch(dropdown_velocidade_blink) {
		  case 'low':
			  var velocidade_blink = velocidade_baixa_blink;
			  break;
		  case 'middle':
			  var velocidade_blink = velocidade_media_blink
			  break;
		  case 'high':
			  var velocidade_blink = velocidade_alta_blink;
			  break;	
	  }
	var value_num = velocidade_blink;
	// TODO: Assemble Arduino into code variable.
  
	Blockly.Arduino.reservePin(
		block, pinLed, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
		
	var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
	Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);
  
	var code = 'digitalWrite(' + pinKey + ',HIGH);\n'
			 + 'delay(' + value_num + ');\n'
			 + 'digitalWrite(' + pinKey + ',LOW);\n'
			 + 'delay(' + value_num + ');\n';
	return code;
   
  };






//*******************************************************
//Gira Motor DC
//*******************************************************

Blockly.Arduino['girar_motor'] = function(block) {
  var dropdown_velocidade_motor = block.getFieldValue('velocidade_motor');
  var pinKey = "pino_motor_DC";
  
  Blockly.Arduino.definitions_['pino_motor_DC'] ='int pino_motor_DC = '+ pinoMotorDC +';'
  
  switch(dropdown_velocidade_motor) {
		case 'low':
			var velocidade = velocidade_baixa_motorDC;
			break;
		case 'middle':
			var velocidade = velocidade_media_motorDC;
			break;
		case 'high':
			var velocidade = velocidade_alta_motorDC;
			break;	
  }
  var value_num = velocidade;

  Blockly.Arduino.reservePin(
      block, pinoMotorDC, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);

  var code = 'analogWrite(' + pinKey + ',' + value_num + ');\n'
  return code;
  
  

};


//*******************************************************
//Para Motor DC
//*******************************************************


Blockly.Arduino['parar_motor'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var pinKey = "pino_motor_DC";
  var value_num = '0';
  Blockly.Arduino.definitions_['pino_motor_DC'] ='int pino_motor_DC = '+ pinoMotorDC +';'
  
  Blockly.Arduino.reservePin(
      block, pinoMotorDC, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);

  var code = 'analogWrite(' + pinKey + ',' + value_num + ');\n'
  return code;
  
};


//*******************************************************
//Move Servo Motor
//*******************************************************

Blockly.Arduino['mover_servomotor'] = function(block) {
  var pinKey = "pino_servo_motor";
  var dropdown_posicao_ponteiro_servo = block.getFieldValue('posicao_ponteiro_servo');
  var angulo = dropdown_posicao_ponteiro_servo;
  var servoName = 'meu_Servo'
  
  Blockly.Arduino.definitions_['pino_servo_motor'] ='int pino_servo_motor = '+ pinoServoMotor +';'
  
  Blockly.Arduino.reservePin(
      block, pinoServoMotor, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.write(' + angulo + ');\n';
  return code;

};



 
//*******************************************************
//Escreve no LCD
//******************************************************* 

Blockly.Arduino['escrever_lcd'] = function(block) {
  var texto = block.getFieldValue('texto');
  var numero_linha = block.getFieldValue('numero_linha');
  var lcdName = nomeLCD;
 
  // TODO: Assemble Arduino into code variable.

  
  switch(numero_linha) {
	case '1':
		var posicao_cursor = lcdName + '.setCursor(0,0);\n';
		break;
	case '2':
		var posicao_cursor = lcdName + '.setCursor(0,1);\n';
		break;		
  } 
   
  Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal.h>');
  
  Blockly.Arduino.definitions_['lcd_pino_rs'] ='int lcd_pino_rs = '+ pino_rs +';'
  Blockly.Arduino.definitions_['lcd_pino_rw'] ='int lcd_pino_rw = '+ pino_rw +';'
  Blockly.Arduino.definitions_['lcd_pino_enable'] ='int lcd_pino_enable = '+ pino_enable +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_4'] ='int lcd_pino_dados_4 = '+ pino_dados_4 +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_5'] ='int lcd_pino_dados_5 = '+ pino_dados_5 +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_6'] ='int lcd_pino_dados_6 = '+ pino_dados_6 +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_7'] ='int lcd_pino_dados_7 = '+ pino_dados_7 +';'  
  
  Blockly.Arduino.addDeclaration('lcd','LiquidCrystal ' + lcdName + '(' 
  + "lcd_pino_rs" + ',' + "lcd_pino_rw" + ',' + "lcd_pino_enable" + ',' + "lcd_pino_dados_4" + ',' + "lcd_pino_dados_5" + ',' + "lcd_pino_dados_6" + ',' + "lcd_pino_dados_7" +
  ');');
  
  var SetupCode1 = nomeSerial + '.begin(' + velocidadeSerial + ');';
  var SetupCode2 = lcdName + '.begin(' + tamanho_linha_lcd + ',' + numero_linhas_lcd +');'; 
  Blockly.Arduino.addSetup('lcd',SetupCode1, true);
  Blockly.Arduino.addSetup('lcd',SetupCode2, true);
  

  var code = posicao_cursor + lcdName + '.print("' + texto + '");\n';
  return code;
  
};


//*******************************************************
//Apaga o LCD
//*******************************************************


Blockly.Arduino['limpar_lcd'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var lcdName = nomeLCD
 
  Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal.h>');

  
  Blockly.Arduino.definitions_['lcd_pino_rs'] ='int lcd_pino_rs = '+ pino_rs +';'
  Blockly.Arduino.definitions_['lcd_pino_rw'] ='int lcd_pino_rw = '+ pino_rw +';'
  Blockly.Arduino.definitions_['lcd_pino_enable'] ='int lcd_pino_enable = '+ pino_enable +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_4'] ='int lcd_pino_dados_4 = '+ pino_dados_4 +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_5'] ='int lcd_pino_dados_5 = '+ pino_dados_5 +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_6'] ='int lcd_pino_dados_6 = '+ pino_dados_6 +';'  
  Blockly.Arduino.definitions_['lcd_pino_dados_7'] ='int lcd_pino_dados_7 = '+ pino_dados_7 +';'  
  
  Blockly.Arduino.addDeclaration('lcd','LiquidCrystal ' + lcdName + '(' 
  + "lcd_pino_rs" + ',' + "lcd_pino_rw" + ',' + "lcd_pino_enable" + ',' + "lcd_pino_dados_4" + ',' + "lcd_pino_dados_5" + ',' + "lcd_pino_dados_6" + ',' + "lcd_pino_dados_7" +
  ');');
  
  var SetupCode1 = nomeSerial + '.begin(' + velocidadeSerial + ');';
  var SetupCode2 = lcdName + '.begin(' + tamanho_linha_lcd + ',' + numero_linhas_lcd +');'; 
  Blockly.Arduino.addSetup('lcd',SetupCode1, true);
  Blockly.Arduino.addSetup('lcd',SetupCode2, true);
  
  var code = lcdName +'.clear();\n';
  return code;

  };
  
  //*******************************************************
// Escreve no Display de 7 segmentos
//*******************************************************

Blockly.Arduino['escrever_display_7s']=function(block){
var numeroDisplay7s =block.getFieldValue('numerosD7S');
	switch(numeroDisplay7s) {
		case '0':
		    var coment = '//Escreve 0 no display 7SEG';
			var outF = 'HIGH';
			var outG = 'LOW';
			var outE = 'HIGH';
			var outD = 'HIGH';
			var outA = 'HIGH';
			var outB = 'HIGH';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
	    case '1':
		     var coment = '//Escreve 1 no display 7SEG';
			var outF = 'LOW';
			var outG = 'LOW';
			var outE = 'LOW';
			var outD = 'LOW';
			var outA = 'LOW';
			var outB = 'HIGH';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
		case '2':
		    var coment = '//Escreve 2 no display 7SEG';		
			var outF = 'LOW';
			var outG = 'HIGH';
			var outE = 'HIGH';
			var outD = 'HIGH';
			var outA = 'HIGH';
			var outB = 'HIGH';
			var outC = 'LOW';
			var outPD = 'LOW';
			break;
		case '3':
            var coment = '//Escreve 3 no display 7SEG';
			var outF = 'LOW';
			var outG = 'HIGH';
			var outE = 'LOW';
			var outD = 'HIGH';
			var outA = 'HIGH';
			var outB = 'HIGH';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
		case '4':
		    var coment = '//Escreve 4 no display 7SEG';
			var outF = 'HIGH';
			var outG = 'HIGH';
			var outE = 'LOW';
			var outD = 'LOW';
			var outA = 'LOW';
			var outB = 'HIGH';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
		case '5':
		    var coment = '//Escreve 5 no display 7SEG';
			var outF = 'HIGH';
			var outG = 'HIGH';
			var outE = 'LOW';
			var outD = 'HIGH';
			var outA = 'HIGH';
			var outB = 'LOW';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
		case '6':
		    var coment = '//Escreve 6 no display 7SEG';
			var outF = 'HIGH';
			var outG = 'HIGH';
			var outE = 'HIGH';
			var outD = 'HIGH';
			var outA = 'HIGH';
			var outB = 'LOW';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
		case '7':
		    var coment = '//Escreve 7 no display 7SEG';
			var outF = 'LOW';
			var outG = 'LOW';
			var outE = 'LOW';
			var outD = 'LOW';
			var outA = 'HIGH';
			var outB = 'HIGH';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
		case '8':
		    var coment = '//Escreve 8 no display 7SEG';
			var outF = 'HIGH';
			var outG = 'HIGH';
			var outE = 'HIGH';
			var outD = 'HIGH';
			var outA = 'HIGH';
			var outB = 'HIGH';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break
		case '9':
		    var coment = '//Escreve 9 no display 7SEG';
			var outF = 'HIGH';
			var outG = 'HIGH';
			var outE = 'LOW';
			var outD = 'HIGH';
			var outA = 'HIGH';
			var outB = 'HIGH';
			var outC = 'HIGH';
			var outPD = 'LOW';
			break;
	}

	
	Blockly.Arduino.definitions_['pino_segmento_A'] ='int pino_segmento_A = '+ pino_segmento_A +';'
	Blockly.Arduino.definitions_['pino_segmento_B'] ='int pino_segmento_B = '+ pino_segmento_B +';'
	Blockly.Arduino.definitions_['pino_segmento_C'] ='int pino_segmento_C = '+ pino_segmento_C +';'
	Blockly.Arduino.definitions_['pino_segmento_D'] ='int pino_segmento_D = '+ pino_segmento_D +';'
	Blockly.Arduino.definitions_['pino_segmento_E'] ='int pino_segmento_E = '+ pino_segmento_E +';'
	Blockly.Arduino.definitions_['pino_segmento_F'] ='int pino_segmento_F = '+ pino_segmento_F +';'
	Blockly.Arduino.definitions_['pino_segmento_G'] ='int pino_segmento_G = '+ pino_segmento_G +';'	
	Blockly.Arduino.definitions_['pino_ponto_decimal'] ='int pino_ponto_decimal = '+ pino_ponto_decimal +';'	
		
	Blockly.Arduino.reservePin(
		  block, pino_segmento_F , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_G , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_E , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_D , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_A , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_B , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_C , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_ponto_decimal, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCodeF = 'pinMode(' + "pino_segmento_F" + ', OUTPUT);';
  var pinSetupCodeG = 'pinMode(' + "pino_segmento_G" + ', OUTPUT);';
  var pinSetupCodeE = 'pinMode(' + "pino_segmento_E" + ', OUTPUT);';
  var pinSetupCodeD = 'pinMode(' + "pino_segmento_D" + ', OUTPUT);';
  var pinSetupCodeA = 'pinMode(' + "pino_segmento_A" + ', OUTPUT);';
  var pinSetupCodeB = 'pinMode(' + "pino_segmento_B" + ', OUTPUT);';
  var pinSetupCodeC = 'pinMode(' + "pino_segmento_C" + ', OUTPUT);';
  var pinSetupCodePD = 'pinMode(' + "pino_ponto_decimal" + ', OUTPUT);';
  
									
  Blockly.Arduino.addSetup('io_' + pino_segmento_F, pinSetupCodeF, true);
  Blockly.Arduino.addSetup('io_' + pino_segmento_G, pinSetupCodeG, true);
  Blockly.Arduino.addSetup('io_' + pino_segmento_E, pinSetupCodeE, true);
  Blockly.Arduino.addSetup('io_' + pino_segmento_D, pinSetupCodeD, true);
  Blockly.Arduino.addSetup('io_' + pino_segmento_A, pinSetupCodeA, true);
  Blockly.Arduino.addSetup('io_' + pino_segmento_B, pinSetupCodeB, true);
  Blockly.Arduino.addSetup('io_' + pino_segmento_C, pinSetupCodeC, true);
  Blockly.Arduino.addSetup('io_' + pino_ponto_decimal, pinSetupCodePD, true);

  
  //Código
  var code = coment +'\n'
            + 'digitalWrite(' + "pino_segmento_F" + ',' + outF + ');\n'
			+ 'digitalWrite(' + "pino_segmento_G" + ',' + outG + ');\n'
			+ 'digitalWrite(' + "pino_segmento_E" + ',' + outE + ');\n'
			+ 'digitalWrite(' + "pino_segmento_D" + ',' + outD + ');\n'
			+ 'digitalWrite(' + "pino_segmento_A" + ',' + outA + ');\n'
			+ 'digitalWrite(' + "pino_segmento_B" + ',' + outB + ');\n'
			+ 'digitalWrite(' + "pino_segmento_C" + ',' + outC + ');\n'
			+ 'digitalWrite(' + "pino_ponto_decimal" + ',' + outPD + ');\n';
			
  return code;
 
};

//*******************************************************
// Linpa Display de 7 segmentos
//*******************************************************

Blockly.Arduino['limpar_display_7s']=function(block){

	var outF = 'LOW';
	var outG = 'LOW';
	var outE = 'LOW';
	var outD = 'LOW';
	var outA = 'LOW';
	var outB = 'LOW';
	var outC = 'LOW';
	var outPD = 'LOW';

	Blockly.Arduino.definitions_['pino_segmento_A'] ='int pino_segmento_A = '+ pino_segmento_A +';'
	Blockly.Arduino.definitions_['pino_segmento_B'] ='int pino_segmento_B = '+ pino_segmento_B +';'
	Blockly.Arduino.definitions_['pino_segmento_C'] ='int pino_segmento_C = '+ pino_segmento_C +';'
	Blockly.Arduino.definitions_['pino_segmento_D'] ='int pino_segmento_D = '+ pino_segmento_D +';'
	Blockly.Arduino.definitions_['pino_segmento_E'] ='int pino_segmento_E = '+ pino_segmento_E +';'
	Blockly.Arduino.definitions_['pino_segmento_F'] ='int pino_segmento_F = '+ pino_segmento_F +';'
	Blockly.Arduino.definitions_['pino_segmento_G'] ='int pino_segmento_G = '+ pino_segmento_G +';'	
	Blockly.Arduino.definitions_['pino_ponto_decimal'] ='int pino_ponto_decimal = '+ pino_ponto_decimal +';'	
		
	
	Blockly.Arduino.reservePin(
		  block, pino_segmento_F , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_G , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_E , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_D , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_A , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_B , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_segmento_C , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	Blockly.Arduino.reservePin(
		  block, pino_ponto_decimal, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

    var pinSetupCodeF = 'pinMode(' + "pino_segmento_F" + ', OUTPUT);';
    var pinSetupCodeG = 'pinMode(' + "pino_segmento_G" + ', OUTPUT);';
    var pinSetupCodeE = 'pinMode(' + "pino_segmento_E" + ', OUTPUT);';
    var pinSetupCodeD = 'pinMode(' + "pino_segmento_D" + ', OUTPUT);';
    var pinSetupCodeA = 'pinMode(' + "pino_segmento_A" + ', OUTPUT);';
    var pinSetupCodeB = 'pinMode(' + "pino_segmento_B" + ', OUTPUT);';
    var pinSetupCodeC = 'pinMode(' + "pino_segmento_C" + ', OUTPUT);';
    var pinSetupCodePD = 'pinMode(' + "pino_ponto_decimal" + ', OUTPUT);';
  
									
    Blockly.Arduino.addSetup('io_' + pino_segmento_F, pinSetupCodeF, true);
    Blockly.Arduino.addSetup('io_' + pino_segmento_G, pinSetupCodeG, true);
    Blockly.Arduino.addSetup('io_' + pino_segmento_E, pinSetupCodeE, true);
    Blockly.Arduino.addSetup('io_' + pino_segmento_D, pinSetupCodeD, true);
    Blockly.Arduino.addSetup('io_' + pino_segmento_A, pinSetupCodeA, true);
    Blockly.Arduino.addSetup('io_' + pino_segmento_B, pinSetupCodeB, true);
    Blockly.Arduino.addSetup('io_' + pino_segmento_C, pinSetupCodeC, true);
    Blockly.Arduino.addSetup('io_' + pino_ponto_decimal, pinSetupCodePD, true);

    var coment = '//Apaga o Display de 7SEG';
 
   //Código
    var code = coment + '\n'
            + 'digitalWrite(' + "pino_segmento_F" + ',' + outF + ');\n'
			+ 'digitalWrite(' + "pino_segmento_G" + ',' + outG + ');\n'
			+ 'digitalWrite(' + "pino_segmento_E" + ',' + outE + ');\n'
			+ 'digitalWrite(' + "pino_segmento_D" + ',' + outD + ');\n'
			+ 'digitalWrite(' + "pino_segmento_A" + ',' + outA + ');\n'
			+ 'digitalWrite(' + "pino_segmento_B" + ',' + outB + ');\n'
			+ 'digitalWrite(' + "pino_segmento_C" + ',' + outC + ');\n'
			+ 'digitalWrite(' + "pino_ponto_decimal" + ',' + outPD + ');\n';
			
    return code;
 
};


//*******************************************************
// LED RGB
//*******************************************************

Blockly.Arduino['led_rgb'] = function(block) {
var colour_luzvermelha = block.getFieldValue('luzVermelha');
var colour_luzverde = block.getFieldValue('luzVerde');
var colour_luzazul = block.getFieldValue('luzAzul');

//Define se a cor vai estar acesa ou apagada

switch(colour_luzvermelha) {
		case '#ff0000':
			var val_luzvermelha = '255';
			break;
	    case '#ffffff':
			var val_luzvermelha = '0';
			break;
}

switch(colour_luzverde) {
		case '#00ff00':
			var val_luzverde = '255';
			break;
	    case '#ffffff':
			var val_luzverde = '0';
			break;
}

switch(colour_luzazul) {
		case '#0000ff':
			var val_luzazul = '255';
			break;
	    case '#ffffff':
			var val_luzazul = '0';
			break;
}


  
//SETUP
  
Blockly.Arduino.definitions_['pino_rgb_vermelho'] ='int pino_rgb_vermelho = '+ pino_rgb_vermelho +';'  
Blockly.Arduino.definitions_['pino_rgb_verde'] ='int pino_rgb_verde = '+ pino_rgb_verde +';'   
Blockly.Arduino.definitions_['pino_rgb_azul'] ='int pino_rgb_azul = '+ pino_rgb_azul +';'  

Blockly.Arduino.reservePin(
      block, pino_rgb_vermelho, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
Blockly.Arduino.reservePin(
      block, pino_rgb_verde, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
Blockly.Arduino.reservePin(
      block, pino_rgb_azul , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  
  
  var pinSetupCodeVermelho = 'pinMode(' + "pino_rgb_vermelho" + ', OUTPUT);';
  var pinSetupCodeVerde = 'pinMode(' + "pino_rgb_verde" + ', OUTPUT);';
  var pinSetupCodeAzul = 'pinMode(' + "pino_rgb_azul" + ', OUTPUT);';

									
  Blockly.Arduino.addSetup('io_' + "pino_rgb_vermelho", pinSetupCodeVermelho, false);
  Blockly.Arduino.addSetup('io_' + "pino_rgb_verde", pinSetupCodeVerde, false);
  Blockly.Arduino.addSetup('io_' + "pino_rgb_azul", pinSetupCodeAzul, false);

   //Código
 
  var code = 'analogWrite(' + "pino_rgb_vermelho" + ',' + val_luzvermelha + ');\n'
			+ 'analogWrite(' + "pino_rgb_verde" + ',' + val_luzverde  + ');\n'
			+ 'analogWrite(' + "pino_rgb_azul" + ',' + val_luzazul  + ');\n';

 return code;
 
};


/**
//*******************************************************
//Tocar nota no Buzzer
//*******************************************************
Blockly.Arduino['tocar_nota_buzzer'] = function(block) {
  var nota_musical = block.getFieldValue('nota_musical');
  var pinKey = "pino_buzzer";
 
  Blockly.Arduino.definitions_['pino_buzzer'] ='int pino_buzzer = '+ pino_buzzer +';' 
  
  Blockly.Arduino.reservePin(
      block, pino_buzzer, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);

  var code = 'tone('+ pinKey +','+nota_musical+');\n';
  
  return code;
};

**/
//*******************************************************
//Tocar nota no Buzzer
//*******************************************************

function Seleciona_frequencia_nota(nota,altura,acidente){

var frequencia = 262;

	switch(altura) {
		case '3':
			switch (nota){
				case 'do':
					switch (acidente){			     
						case 'b': frequencia = 123;break;
						case 'n': frequencia = 131;break;					
						case 's': frequencia = 139;break;			   
					}
				break;
				case 're':
					switch (acidente){			     
						case 'b': frequencia = 139;break;
						case 'n': frequencia = 147;break;					
						case 's': frequencia = 156;break;			   
					}
				break;
				case 'mi':
					switch (acidente){			     
						case 'b': frequencia = 156;break;
						case 'n': frequencia = 165;break;					
						case 's': frequencia = 175;break;			   
					}
				break;				
				case 'fa':
					switch (acidente){			     
						case 'b': frequencia = 165;break;
						case 'n': frequencia = 175;break;					
						case 's': frequencia = 185;break;			   
					}
				break;
				case 'sol':
					switch (acidente){			     
						case 'b': frequencia = 185;break;
						case 'n': frequencia = 196;break;					
						case 's': frequencia = 208;break;			   
					}
				break;
				case 'la':
					switch (acidente){			     
						case 'b': frequencia = 208;break;
						case 'n': frequencia = 220;break;					
						case 's': frequencia = 233;break;			   
					}
				break;
				case 'si':
					switch (acidente){			     
						case 'b': frequencia = 233;break;
						case 'n': frequencia = 247;break;					
						case 's': frequencia = 262;break;			   
					}
				break;	
			}
		break;	
		case '4':
			switch (nota){
				case 'do':
					switch (acidente){			     
						case 'b': frequencia = 247;break;
						case 'n': frequencia = 262;break;					
						case 's': frequencia = 277;break;			   
					}
				break;
				case 're':
					switch (acidente){			     
						case 'b': frequencia = 277;break;
						case 'n': frequencia = 294;break;					
						case 's': frequencia = 311;break;			   
					}
				break;
				case 'mi':
					switch (acidente){			     
						case 'b': frequencia = 311;break;
						case 'n': frequencia = 330;break;					
						case 's': frequencia = 349;break;			   
					}
				break;				
				case 'fa':
					switch (acidente){			     
						case 'b': frequencia = 330;break;
						case 'n': frequencia = 349;break;					
						case 's': frequencia = 370;break;			   
					}
				break;
				case 'sol':
					switch (acidente){			     
						case 'b': frequencia = 370;break;
						case 'n': frequencia = 392;break;					
						case 's': frequencia = 415;break;			   
					}
				break;
				case 'la':
					switch (acidente){			     
						case 'b': frequencia = 415;break;
						case 'n': frequencia = 440;break;					
						case 's': frequencia = 466;break;			   
					}
				break;
				case 'si':
					switch (acidente){			     
						case 'b': frequencia = 499;break;
						case 'n': frequencia = 494;break;					
						case 's': frequencia = 523;break;			   
					}
				break;					
			}			
		break;
		case '5':
			switch (nota){
				case 'do':
					switch (acidente){			     
						case 'b': frequencia = 494;break;
						case 'n': frequencia = 523;break;					
						case 's': frequencia = 554;break;			   
					}
				break;
				case 're':
					switch (acidente){			     
						case 'b': frequencia = 554;break;
						case 'n': frequencia = 587;break;					
						case 's': frequencia = 622;break;			   
					}
				break;
				case 'mi':
					switch (acidente){			     
						case 'b': frequencia = 622;break;
						case 'n': frequencia = 659;break;					
						case 's': frequencia = 698;break;			   
					}
				break;				
				case 'fa':
					switch (acidente){			     
						case 'b': frequencia = 659;break;
						case 'n': frequencia = 698;break;					
						case 's': frequencia = 740;break;			   
					}
				break;
				case 'sol':
					switch (acidente){			     
						case 'b': frequencia = 740;break;
						case 'n': frequencia = 784;break;					
						case 's': frequencia = 831;break;			   
					}
				break;
				case 'la':
					switch (acidente){			     
						case 'b': frequencia = 831;break;
						case 'n': frequencia = 880;break;					
						case 's': frequencia = 932;break;			   
					}
				break;
				case 'si':
					switch (acidente){			     
						case 'b': frequencia = 932;break;
						case 'n': frequencia = 988;break;					
						case 's': frequencia = 1047;break;			   
					}
				break;		
			}
		break;
	}		
return frequencia;	
	
}

Blockly.Arduino['tocar_nota_buzzer'] = function(block) {
  var nota_musical = block.getFieldValue('nota_musical');
  var altura = block.getFieldValue('altura'); 
  var acidente = block.getFieldValue('acidente'); 
  
  var pinKey = "pino_buzzer";
 
  Blockly.Arduino.definitions_['pino_buzzer'] ='int pino_buzzer = '+ pino_buzzer +';' 
  
  Blockly.Arduino.reservePin(
      block, pino_buzzer, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);
  

  var code = 'noTone('+ pinKey + ');' + '\n' + 'tone('+ pinKey +','+ Seleciona_frequencia_nota(nota_musical,altura,acidente) +');\n' ;
  
  return code;
};


Blockly.Arduino['parar_som_buzzer'] = function(block) {
  
  var pinKey = "pino_buzzer";
 
  Blockly.Arduino.definitions_['pino_buzzer'] ='int pino_buzzer = '+ pino_buzzer +';' 
  
  Blockly.Arduino.reservePin(
      block, pino_buzzer, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);
  

  var code = 'noTone('+ pinKey + ');\n' ;
  
  return code;
};
//*******************************************************
//Tocar sirente no Buzzer
//*******************************************************
Blockly.Arduino['tocar_sirene_buzzer'] = function(block) {
  var velocidade = block.getFieldValue('velocidade');
  var pinKey = "pino_buzzer";
 
  Blockly.Arduino.definitions_['pino_buzzer'] ='int pino_buzzer = '+ pino_buzzer +';' 
  
  Blockly.Arduino.reservePin(
      block, pino_buzzer, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var pinSetupCode = 'pinMode(' + pinKey + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pinKey, pinSetupCode, false);

  var code = ' for (int frequencia = 150; frequencia < 1800; frequencia += 1)\n' +  
			 ' {\n' + 
			 '  tone('+pinKey+', frequencia,'+tempo_sirene+');\n' +  
			 '  delay('+velocidade+');\n' +  
			 ' }\n' + 
			  ' for (int frequencia = 1800; frequencia > 150; frequencia -= 1)\n' +  
			 ' {\n' + 
			 '  tone('+pinKey+', frequencia,'+tempo_sirene+');\n' +  
			 '  delay('+velocidade+');\n' +  
			 ' }\n';
  return code;
};



 
 
