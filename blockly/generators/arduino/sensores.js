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

goog.provide('Blockly.Arduino.sensores');
goog.require('Blockly.Arduino');

//--------------------------------------------
//Generators included by RLQ - DB4K
//--------------------------------------------

//variáveis sensor distância

var tipo_biblioteca_ultrassonico=DB4K_tipo_biblioteca_ultrassonico;
var pino_ultrasonic_echo=DB4K_pino_ultrasonic_echo;
var pino_ultrasonic_envio_sinal=DB4K_pino_ultrasonic_envio_sinal;
var ultrasonic_delay_leitura=DB4K_ultrasonic_delay_leitura;

//variáveis sensor temperatura
var pino_analogico_sensor_temperatura=DB4K_pino_analogico_sensor_temperatura;
var valor_margem_temperatura_baixa=DB4K_valor_margem_temperatura_baixa;
var valor_margem_temperatura_alta=DB4K_valor_margem_temperatura_alta;

//variáveis sensor luz
var pino_analogico_LDR_luz=DB4K_pino_analogico_LDR_luz;
var valor_margem_luz_baixa=DB4K_valor_margem_luz_baixa;
var valor_margem_luz_alta=DB4K_valor_margem_luz_alta;

//variáveis sensor refletância
var tipo_leitura_sensor = DB4K_tipo_leitura_sensor;
var pino_digital_sensor_linha_esquerdo = DB4K_pino_digital_sensor_linha_esquerdo;
var pino_digital_sensor_linha_direito = DB4K_pino_digital_sensor_linha_direito;
var pino_analogico_sensor_linha_direito = DB4K_pino_analogico_sensor_linha_direito;
var pino_analogico_sensor_linha_esquerdo = DB4K_pino_analogico_sensor_linha_esquerdo;
var valor_margem_refletancia_baixa=DB4K_valor_margem_refletancia_baixa;
var valor_margem_refletancia_alta=DB4K_valor_margem_refletancia_alta;


//Variáveis potenciômetro
var pino_analogico_potenciometro = DB4K_pino_analogico_potenciometro;
var med_val_potenciometro_sup = DB4K_med_val_potenciometro_sup;
var med_val_potenciometro_inf = DB4K_med_val_potenciometro_inf;

//Variáveis sensor toque
var pino_sensor_toque = DB4K_pino_sensor_toque;
var pino_sensor_toque1 = DB4K_pino_sensor_toque1;
var pino_sensor_toque2 = DB4K_pino_sensor_toque2;
var pino_sensor_toque3 = DB4K_pino_sensor_toque3;


/**
//Variáves sensor Cor
var tipo_sensor_cor=DB4K_tipo_sensor_cor; 
var sensor_cor_delay_leitura=DB4K_sensor_cor_delay_leitura;
//variáveis sensor cor LDR 

var pino_analogico_LDR_cor=DB4K_pino_analogico_LDR_cor;
var LDR_verde_min=DB4K_LDR_verde_min;
var LDR_verde_max=DB4K_LDR_verde_max;
var LDR_vermelha_min=DB4K_LDR_vermelha_min;
var LDR_vermelha_max=DB4K_LDR_vermelha_max;
var LDR_azul_min=DB4K_LDR_azul_min;
var LDR_azul_max=DB4K_LDR_azul_max;
var LDR_preta_min=DB4K_LDR_preta_min;
var LDR_preta_max=DB4K_LDR_preta_max;
var LDR_branca_min=DB4K_LDR_branca_min;
var LDR_branca_max=DB4K_LDR_branca_max;

variáveis sensor cor TCS3200 
var pino_sensor_TCS3200_S0=DB4K_pino_sensor_TCS3200_S0;
var pino_sensor_TCS3200_S1=DB4K_pino_sensor_TCS3200_S1;
var pino_sensor_TCS3200_S2=DB4K_pino_sensor_TCS3200_S2;
var pino_sensor_TCS3200_S3=DB4K_pino_sensor_TCS3200_S3;
var pino_sensor_TCS3200_OUT=DB4K_pino_sensor_TCS3200_OUT;
var pino_sensor_TCS3200_OE=DB4K_pino_sensor_TCS3200_OE;
var pino_sensor_TCS3200_LED=DB4K_pino_sensor_TCS3200_LED;
var TCS3200_verde_min=DB4K_TCS3200_verde_min;
var TCS3200_verde_max=DB4K_TCS3200_verde_max;
var TCS3200_azul_min=DB4K_TCS3200_azul_min;
var TCS3200_azul_max=DB4K_TCS3200_azul_max;
var TCS3200_vermelho_min=DB4K_TCS3200_vermelho_min;
var TCS3200_vermelho_max=DB4K_TCS3200_vermelho_max;
var TCS3200_branco_min=DB4K_TCS3200_branco_min;
var TCS3200_branco_max=DB4K_TCS3200_branco_max;
var TCS3200_preto_min=DB4K_TCS3200_preto_min;
var TCS3200_preto_max=DB4K_TCS3200_preto_max;
//***********************************************************************/



//*************************************************************************
//Sensor Luz
//*************************************************************************

function codigo_verifica_luminosidade(){
	
var codigo = 
    'int luminosidade = 0;\n' +
   	'for (int i = 0; i<10;++i){\n' +
	'luminosidade = analogRead('+ "pino_analogico_LDR_luz" +') + luminosidade;\n' +
	'}\n' +
	'luminosidade = luminosidade/10;\n' +
	'return luminosidade;\n';
return codigo;	
	
}

Blockly.Arduino['sensor_luz'] = function(block) {
  var dropdown_luz = block.getFieldValue('luminosidade');
  
 //Declara a função que verifica a luminosidade 
  var nome_funcao = 'verifica_luminosidade' ;
  var func = ['\n'+'int ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
  codigo_verifica_luminosidade() + '}\n']; 
  var funcName = Blockly.Arduino.addFunction(nome_funcao, func.join('\n'));	
	
	
  //Setup Calibrar	
  Blockly.Arduino.addSetup('io_' + "referencia_luz_alta", 'referencia_luz_alta = '+ funcName + '() + '  +  valor_margem_luz_alta + ';', false);
  Blockly.Arduino.addSetup('io_' + "referencia_luz_baixa", 'referencia_luz_baixa = '+ funcName + '() - '  +  valor_margem_luz_baixa +';', false);
  
  //Definitions
  Blockly.Arduino.definitions_['pino_analogico_LDR_luz'] ='int pino_analogico_LDR_luz = '+ pino_analogico_LDR_luz +';'
  Blockly.Arduino.definitions_['referencia_luz_alta'] ='int referencia_luz_alta;';
  Blockly.Arduino.definitions_['referencia_luz_baixa'] ='int referencia_luz_baixa;'; 
  
  //ReservaPinos  
  Blockly.Arduino.reservePin(
      block, pino_analogico_LDR_luz, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');
  
  //Gera Código
  if (dropdown_luz == "forte"){
	  var code =  '('+ funcName + '() >= referencia_luz_alta )' ;
  }
  if (dropdown_luz == "ambiente"){
	  var code =  '((referencia_luz_baixa <'+ funcName + '())' + '&&(' + funcName + '()' + ' < referencia_luz_alta ))' ;
  }
  if (dropdown_luz == "fraca"){
	  var code =  '('+ funcName + '() <= referencia_luz_baixa )' ;
  }
  
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};


//*************************************************************************
//Sensor Temperatura
//*************************************************************************
  
// function codigo_verifica_temperatura(){
	
// var codigo = 
//     'float temperatura = 0;\n' +
//    	'for (int i = 0; i<10;++i){\n' +
// 	'temperatura = temp.getTemp() + temperatura;\n' +
// 	'}\n' +
// 	'temperatura = temperatura/10;\n' +
// 	'return temperatura;\n';
// return codigo;	
	
// }  
  
  
// Blockly.Arduino['sensor_temperatura'] = function(block) {
//   var dropdown_temperatura = block.getFieldValue('temperatura'); 

//  //Declara a função que verifica a temperatura 
//   var nome_funcao = 'verifica_temperatura' ;
//   var func = ['\n'+'float ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
//   codigo_verifica_temperatura() + '}\n']; 
//   var funcName = Blockly.Arduino.addFunction(nome_funcao, func.join('\n'));	

  
//   //Include
//   Blockly.Arduino.addInclude('sensor_temperatura', '#include <Thermistor.h>');
  
//   //Definition
//   Blockly.Arduino.definitions_['pino_analogico_sensor_temperatura'] ='int pino_analogico_sensor_temperatura = '+ pino_analogico_sensor_temperatura +';'
//   Blockly.Arduino.definitions_['referencia_temperatura_alta'] ='float referencia_temperatura_alta;';
//   Blockly.Arduino.definitions_['referencia_temperatura_baixa'] ='float referencia_temperatura_baixa;'; 
//  //declarando o sensor
//    Blockly.Arduino.addDeclaration('sensor_temperatura', 'Thermistor temp('+ "pino_analogico_sensor_temperatura"+');');  
//  //Setup Calibrar
//   Blockly.Arduino.addSetup('io_' + "referencia_temperatura_alta", 'referencia_temperatura_alta = '+ funcName + '() + '  + valor_margem_temperatura_alta + ';', false);
//   Blockly.Arduino.addSetup('io_' + "referencia_temperatura_baixa", 'referencia_temperatura_baixa = '+ funcName + '() - '  + valor_margem_temperatura_baixa + ';', false);
  
  
//   //ReservaPinos  
//     Blockly.Arduino.reservePin(
//       block, pino_analogico_sensor_temperatura, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');
   
//   //Gera Código
//   if (dropdown_temperatura == "alta"){
// 	  var code =  '('+ funcName + '() >= referencia_temperatura_alta )' ;
//   }
//   if (dropdown_temperatura == "ambiente"){
// 	  var code =  '((referencia_temperatura_baixa <'+ funcName + '())' + '&&(' + funcName + '()' + ' < referencia_temperatura_alta ))' ;
//   }
//   if (dropdown_temperatura == "baixa"){
// 	  var code =  '('+ funcName + '() <= referencia_temperatura_baixa )' ;
//   }
  
//   return [code, Blockly.Arduino.ORDER_CONDITIONAL];

// };



//*************************************************************************
//Sensor Distância
//*************************************************************************

function codigo_verifica_distancia(){

if (tipo_biblioteca_ultrassonico==1){
	var	comando_verifica_distancia = 'ultrasonic.Ranging(CM)';
}else{
	var	comando_verifica_distancia = 'ultrasonic.read()';
}
var codigo = 
   // 'digitalWrite('+ pino_ultrasonic_envio_sinal + ', LOW);\n' +
   // 'delayMicroseconds(2);\n' +
   // 'digitalWrite('+ pino_ultrasonic_envio_sinal + ', HIGH);\n' +
   // 'delayMicroseconds(10);\n' +
   // 'digitalWrite('+ pino_ultrasonic_envio_sinal + ', LOW);\n' +
    'int distancia = 0;\n' +
   	'for (int i = 0; i<10;++i){\n' +
	'distancia = ' +  comando_verifica_distancia + ' + distancia;\n' +
	'}\n' +
	'distancia = distancia/10;\n' +
    //'delay(' + delay_leitura_sensor_distancia+ ');\n' + ;
	'return distancia;\n';

return codigo;	
	
}


Blockly.Arduino['sensor_distancia'] = function(block) {
  var dropdown_operador = block.getFieldValue('operador');
  var text_distancia = block.getFieldValue('distancia');
  
  var nome_variavel_echo = 'pino_echo';
  var nome_variavel_envio_sinal = 'pino_sinal';
   
  //Declara a função que verifica a distância 
  var nome_funcao = 'verifica_distancia' ;
  var func = ['\n'+'int ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
  codigo_verifica_distancia() + '}\n']; 
  var funcName = Blockly.Arduino.addFunction(nome_funcao, func.join('\n'));

	 
  var OPERATORS = {
    'igual': '==',
    'menor': '<',
    'maior': '>',
  };
  
  var tipo_operador = OPERATORS[block.getFieldValue('operador')];

  //Includes
  Blockly.Arduino.addInclude('sensor_distancia', '#include <Ultrasonic.h>');
 
  //Definitions	
  Blockly.Arduino.definitions_['pino_ultrasonic_envio_sinal'] ='int pino_ultrasonic_envio_sinal = '+ pino_ultrasonic_envio_sinal +';'
  Blockly.Arduino.definitions_['pino_ultrasonic_echo'] ='int pino_ultrasonic_echo = '+ pino_ultrasonic_echo +';'
  
  //declarando o sensor
   Blockly.Arduino.addDeclaration('sensor_distancia', 'Ultrasonic ultrasonic('+ "pino_ultrasonic_envio_sinal"+','+"pino_ultrasonic_echo" +');');
   
  //ReservaPinos  
  Blockly.Arduino.reservePin(
      block, pino_ultrasonic_echo, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');
  Blockly.Arduino.reservePin(
      block, pino_ultrasonic_envio_sinal, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  
  //Setup
  var pinSetupCode_echo = 'pinMode(' + "pino_ultrasonic_echo" + ', INPUT);';
  var pinSetupCode_envio_sinal = 'pinMode(' + "pino_ultrasonic_envio_sinal" + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + "pino_ultrasonic_echo", pinSetupCode_echo, false);
  Blockly.Arduino.addSetup('io_' + "pino_ultrasonic_envio_sinal", pinSetupCode_envio_sinal, false);
  
   
  var code = '('+funcName + '() ' +  tipo_operador + ' ' + text_distancia +' )';
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
 


//*****************************************************************
//SENSOR SEGUIDOR DE LINHA
//*****************************************************************
function codigo_verifica_refletancia(){

var codigo = 
		'int refletancia = 0;\n' +
		'for (int i = 0; i<10;++i){\n' +
		'refletancia = analogRead(pino_sensor_reflexo) + refletancia;\n' +
		'}\n' +
		'refletancia = refletancia/10;\n' +
		'return refletancia;\n';
		
return codigo;	
	
}

Blockly.Arduino['sensor_linha'] = function(block) {
  var dropdown_reflexo = block.getFieldValue('REFLEXO');
  var dropdown_direcao = block.getFieldValue('DIRECAO');
  
  if (tipo_leitura_sensor == 'a'){	  
		  //Declara a função que verifica a refletancia 
		  var nome_funcao = 'verifica_refletancia' ;
		  var func = ['\n'+'int ' + Blockly.Arduino.DEF_FUNC_NAME + '(int pino_sensor_reflexo)\n{\n' +
		  codigo_verifica_refletancia() + '}\n']; 
		  var funcName = Blockly.Arduino.addFunction(nome_funcao, func.join('\n'));	
		  //
		  var pino_sensor_linha_direito = pino_analogico_sensor_linha_direito;
		  var pino_sensor_linha_esquerdo = pino_analogico_sensor_linha_esquerdo;
		  if(dropdown_direcao == 'DIREITA'){
		  Blockly.Arduino.definitions_['referencia_reflexo_direita'] ='int referencia_reflexo_direita;';
		  Blockly.Arduino.definitions_['pino_seguidor_direita'] = 'int pino_seguidor_direita = ' +  pino_sensor_linha_direito +';';
		  Blockly.Arduino.addSetup('io_' + "referencia_reflexo_direita", 'referencia_reflexo_direita = '+ funcName + '(pino_seguidor_direita);', false);
		  if(dropdown_reflexo == 'MUITO'){
				var code = 'analogRead(pino_seguidor_direita) > referencia_reflexo_direita + ' + valor_margem_refletancia_alta;
			}
			else if(dropdown_reflexo == 'POUCO'){
				var code = 'analogRead(pino_seguidor_direita) < referencia_reflexo_direita - ' + valor_margem_refletancia_baixa;
			}
		  } else if(dropdown_direcao == 'ESQUERDA'){	  
		  Blockly.Arduino.definitions_['referencia_reflexo_esquerda'] ='int referencia_reflexo_esquerda;';
		  Blockly.Arduino.definitions_['pino_seguidor_esquerda'] = 'int pino_seguidor_esquerda = ' + pino_sensor_linha_esquerdo +';';		  
		  Blockly.Arduino.addSetup('io_' + "referencia_reflexo_esquerda", 'referencia_reflexo_esquerda = '+ funcName + '(pino_seguidor_esquerda);', false);	   
			if(dropdown_reflexo == 'MUITO'){
				var code = 'analogRead(pino_seguidor_esquerda) > referencia_reflexo_esquerda + ' + valor_margem_refletancia_alta;
			}
			else if(dropdown_reflexo == 'POUCO'){
				var code = 'analogRead(pino_seguidor_esquerda) < referencia_reflexo_esquerda - ' + valor_margem_refletancia_baixa;
			}
		  }
  } else {
      var pino_sensor_linha_direito = pino_digital_sensor_linha_direito;
	  var pino_sensor_linha_esquerdo = pino_digital_sensor_linha_esquerdo;	 
      if(dropdown_direcao == 'DIREITA'){	  
		  var pinSetupSensorReflexoDireita = 'pinMode(' + "pino_seguidor_direita" + ', INPUT);';
		  Blockly.Arduino.addSetup('io_' + "pino_seguidor_direita", pinSetupSensorReflexoDireita, false);
		  Blockly.Arduino.definitions_['pino_seguidor_direita'] = 'int pino_seguidor_direita = ' +  pino_sensor_linha_direito +';';
		  //código
		  if(dropdown_reflexo == 'MUITO'){
			 var code = 'digitalRead (' + pino_sensor_linha_direito + ')== 0';
		  }else if(dropdown_reflexo == 'POUCO'){
			  var code = 'digitalRead (' + pino_sensor_linha_direito + ')== 1';
		  }
	  }else if(dropdown_direcao == 'ESQUERDA'){
		  var pinSetupSensorReflexoEsquerda = 'pinMode(' + "pino_seguidor_esquerda" + ', INPUT);'; 
		  Blockly.Arduino.definitions_['pino_seguidor_esquerda'] = 'int pino_seguidor_esquerda = ' + pino_sensor_linha_esquerdo +';';
		  Blockly.Arduino.addSetup('io_' + "pino_seguidor_esquerda", pinSetupSensorReflexoEsquerda, false);
		  //código
		  if(dropdown_reflexo == 'MUITO'){
			 var code = 'digitalRead (' + pino_sensor_linha_esquerdo + ')== 0';
		  } else if(dropdown_reflexo == 'POUCO'){
		    var code = 'digitalRead (' + pino_sensor_linha_esquerdo + ')== 1';
		  }
	  }
  }
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];	  

};


//*****************************************************************
//POTENCIOMETRO
//*****************************************************************

Blockly.Arduino['potenciometro'] = function(block) {
  var dropdown_potenciometro = block.getFieldValue('potenciometro');
  // TODO: Assemble JavaScript into code variable.
  //Definitions
  Blockly.Arduino.definitions_['pino_potenciometro'] = 'int pino_potenciometro = ' +  pino_analogico_potenciometro +';';
  
  if (dropdown_potenciometro == "BAIXO"){
	  var code = '(analogRead(pino_potenciometro) > '+ med_val_potenciometro_sup  +')';
  }
  if (dropdown_potenciometro == "MEDIO"){
	  var code = '((' + med_val_potenciometro_inf + ' < analogRead(pino_potenciometro)) && (analogRead(pino_potenciometro) < ' + med_val_potenciometro_sup + '))';
  }
  if (dropdown_potenciometro == "ALTO"){
	  var code = '(analogRead(pino_potenciometro) < ' + med_val_potenciometro_inf +')';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
 
};


//*****************************************************************
//SENSOR DE TOQUE
//*****************************************************************
Blockly.Arduino['sensor_toque'] = function(block) {
 var dropdown_botao = block.getFieldValue('BOTAO');
 var dropdown_porta_led = block.getFieldValue('porta_botao');
 if(dropdown_porta_led == 1){
	Blockly.Arduino.definitions_['sensor_toque'] = 'int sensor_toque = ' +  pino_sensor_toque +';';
	var pinSetupCode_echo = 'pinMode(' + "sensor_toque" + ', INPUT_PULLUP);';
	Blockly.Arduino.addSetup('io_' + "sensor_toque", pinSetupCode_echo, false);
	if(dropdown_botao == 1){
		var code = 'digitalRead(sensor_toque)==LOW';
	}
	if(dropdown_botao == 0){
		var code = 'digitalRead(sensor_toque)!=LOW';
	}
   
 }

 else if(dropdown_porta_led == 2){
	Blockly.Arduino.definitions_['sensor_toque1'] = 'int sensor_toque1 = ' +  pino_sensor_toque1 +';';
	var pinSetupCode_echo = 'pinMode(' + "sensor_toque1" + ', INPUT_PULLUP);';
	Blockly.Arduino.addSetup('io_' + "sensor_toque1", pinSetupCode_echo, false);
	if(dropdown_botao == 1){
		var code = 'digitalRead(sensor_toque1)==LOW';
	}
	if(dropdown_botao == 0){
		var code = 'digitalRead(sensor_toque1)!=LOW';
	}
   
 }
 else if(dropdown_porta_led == 3){
	Blockly.Arduino.definitions_['sensor_toque2'] = 'int sensor_toque2 = ' +  pino_sensor_toque2 +';';
	var pinSetupCode_echo = 'pinMode(' + "sensor_toque2" + ', INPUT_PULLUP);';
	Blockly.Arduino.addSetup('io_' + "sensor_toque2", pinSetupCode_echo, false);
	if(dropdown_botao == 1){
		var code = 'digitalRead(sensor_toque2)==LOW';
	}
	if(dropdown_botao == 0){
		var code = 'digitalRead(sensor_toque2)!=LOW';
	}
   
 }
 else if(dropdown_porta_led == 4){
	Blockly.Arduino.definitions_['sensor_toque3'] = 'int sensor_toque3 = ' +  pino_sensor_toque3 +';'
	var pinSetupCode_echo = 'pinMode(' + "sensor_toque3" + ', INPUT_PULLUP);';
	Blockly.Arduino.addSetup('io_' + "sensor_toque3", pinSetupCode_echo, false);
	if(dropdown_botao == 1){
		var code = 'digitalRead(sensor_toque3)==LOW';
	}
	if(dropdown_botao == 0){
		var code = 'digitalRead(sensor_toque3)!=LOW';
	}
   
 }

;

  return [code, Blockly.Arduino.ORDER_CONDITIONAL];

};

/**

//*************************************************************************
//Sensor Cor
//*************************************************************************

function declara_variaveis_globais_sensor_cor_TCS3200() {
  Blockly.Arduino.definitions_['valor_cor_vermelha'] = 'int valor_cor_vermelha = 0;';
  Blockly.Arduino.definitions_['valor_cor_verde'] = 'int valor_cor_verde = 0;';
  Blockly.Arduino.definitions_['valor_cor_azul'] = 'int valor_cor_azul = 0;';
}


function codigo_le_LDR(){
  var codigo = 	
    'int valor_LDR = analogRead('+ pino_analogico_LDR_cor+');\n' +
	'return valor_LDR;\n';
  return codigo;	
}


function codigo_le_TCS3200_Biblio(){
  var codigo = 		
	' uint32_t v;\n' +
	' v = CS.readSingle();\n' +
	' return v ;\n';
  return codigo;	
}


function codigo_le_valores_RGB(){
  var codigo = 	
	'digitalWrite('+ pino_sensor_TCS3200_S2 +', LOW);\n' +  
	'digitalWrite('+ pino_sensor_TCS3200_S3 +', LOW); \n' + 
	'valor_cor_vermelha = pulseIn(' + pino_sensor_TCS3200_OUT + ', digitalRead(' + pino_sensor_TCS3200_OUT + ') == HIGH ? LOW : HIGH);\n' +  
	'digitalWrite('+ pino_sensor_TCS3200_S3 +', HIGH); \n' +  
	'valor_cor_azul = pulseIn(' + pino_sensor_TCS3200_OUT + ', digitalRead(' + pino_sensor_TCS3200_OUT + ') == HIGH ? LOW : HIGH);  \n' +
	'digitalWrite('+pino_sensor_TCS3200_S2+', HIGH);\n' +  
	'valor_cor_verde = pulseIn(' + pino_sensor_TCS3200_OUT + ', digitalRead(' + pino_sensor_TCS3200_OUT + ') == HIGH ? LOW : HIGH); \n'; 
  return codigo;	
}

function codigo_diferenca_valores_RGB() {
  var codigo = 	
	'int vetRGB[3];\n' +
	'int maior; \n' + 
	'int menor; \n' +
	'vetRGB[0]=valor_cor_vermelha;\n' + 
	'vetRGB[1]=valor_cor_verde;\n' + 
	'vetRGB[2]=valor_cor_azul;\n' +
	'maior = vetRGB[0];\n' +
	'menor = vetRGB[0];\n' +
	'for (int i = 0; i<2;++i){\n' +
	'  if (vetRGB[i+1]> maior){ maior = vetRGB[i+1];}\n' +
	'  if (vetRGB[i+1]< menor){ menor = vetRGB[i+1];}\n' +
	'}\n' +
	'return  maior - menor;\n' ;
  
  return codigo;		
}

function codigo_verifica_cor_TCS_3200() {
  var codigo = 	
 ' le_valores_RGB();\n' +
 ' if ((diferenca_valores_RGB() >= 2) && ((valor_cor_azul <20) || (valor_cor_vermelha <20)))//Sertifica-se de que a cor lida não é branco ou preto\n' +
 ' {\n' +
 '   //Verifica se a cor vermelha foi detectada\n' +
 '    if (valor_cor_vermelha < valor_cor_azul && valor_cor_vermelha < valor_cor_verde)\n' + 
 '    {\n' +  
 '    return 1;\n' +
 '    }\n' + 
 '    //Verifica se a cor azul foi detectada\n' +  
 '    else if (valor_cor_azul < valor_cor_vermelha && valor_cor_azul < valor_cor_verde)\n' +   
 '    {\n' +  
 '    return 2;\n' +  
 '    }\n' +  
 '    //Verifica se a cor verde foi detectada\n' +  
 '    else if (valor_cor_verde < valor_cor_vermelha && valor_cor_verde < valor_cor_azul)\n' +  
 '    {\n' +  
 '    return 3;\n' +   
 '    }\n' +  
 ' } else if ((valor_cor_verde > 20) && (valor_cor_vermelha >20)) // Verifica se a cor é preto\n' +
 ' {\n' +
 '   return 5;\n' +  
 ' }else\n' +
 ' {\n' +
 '   return 4;\n' +  
 ' }\n' ;
  
  return codigo;	
}



Blockly.Arduino['sensor_cor'] = function(block) {
  var dropdown_operador = block.getFieldValue('operador');
  var colour = block.getFieldValue('cor');
  //-----LDR  
  if  (tipo_sensor_cor == 'LDR')
  {
		switch(colour) {
			case '#ff0000':
				var max_cor = LDR_vermelha_max;
				var min_cor = LDR_vermelha_min;
				break;
			case '#00ff00':
				var max_cor = LDR_verde_max;
				var min_cor = LDR_verde_min;
				break;				
			case '#0000ff':
				var max_cor = LDR_azul_max;
				var min_cor = LDR_azul_min;
				break;
			case '#ffffff':
				var max_cor = LDR_branca_max;
				var min_cor = LDR_branca_min;
				break;	
			case '#000000':
				var max_cor = LDR_preta_max;
				var min_cor = LDR_preta_min;
				break;				
		} 

		var OPERATORS = {
		'igual': '==',
		'diferente': '!==',
		};
		var tipo_operador = OPERATORS[block.getFieldValue('operador')];

		var nome_funcao = 'le_LDR';
		var func = ['\n'+' int ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
		codigo_le_LDR() + '}\n']; 
		var funcName = Blockly.Arduino.addFunction(nome_funcao, func.join('\n'));

		Blockly.Arduino.reservePin(
		 block, pino_analogico_LDR_cor, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

		if (tipo_operador == '==' )
		{ 
		  var code = '(le_LDR() >= ' + min_cor + ') && (le_LDR() <= ' + max_cor +')';
		} else if (tipo_operador == '!==' )
		{
		  var code = '!((le_LDR() >= ' + min_cor + ') && (le_LDR() <= ' + max_cor +'))';
		}


  } 
 
   //-----TCS_3200 Com Biblioteca
  else if (tipo_sensor_cor == 'TCS_3200_Biblio')
  
  {
		
  } 
  //-----TCS_3200 
  else if (tipo_sensor_cor == 'TCS_3200')
  {
		var cor_base_TCS3200;	
		switch(colour) {
			case '#ff0000':
				cor_base_TCS3200 = 1; //vermelho
				break;
			case '#00ff00':
				cor_base_TCS3200= 3; //verde
				break;				
			case '#0000ff':
				cor_base_TCS3200 = 2; //azul
				break;
			case '#ffffff':
				cor_base_TCS3200 = 4; //branco
				break;	
			case '#000000':
				cor_base_TCS3200 = 5; //preto
				break;				
		} 
		var OPERATORS = {
		'igual': '==',
		'diferente': '!==',
		};
		var tipo_operador = OPERATORS[block.getFieldValue('operador')];

		
		//Declara Variáveis Globais
		declara_variaveis_globais_sensor_cor_TCS3200();

		//Reserva Pinos
		 Blockly.Arduino.reservePin(
		 block, pino_sensor_TCS3200_S0, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');	
		 Blockly.Arduino.reservePin(
		 block, pino_sensor_TCS3200_S1, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
		 Blockly.Arduino.reservePin(
		 block, pino_sensor_TCS3200_S2, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');	
		 Blockly.Arduino.reservePin(
		 block, pino_sensor_TCS3200_S3, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
		 //Blockly.Arduino.reservePin(
		// block, pino_sensor_TCS3200_OE, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');
		 Blockly.Arduino.reservePin(
		 block, pino_sensor_TCS3200_OUT, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');
		//Blockly.Arduino.reservePin(
		// block, pino_sensor_TCS3200_LED, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
		
		//Setup
		var pinSetupCode_CSpino_S0 = 'pinMode(' + pino_sensor_TCS3200_S0 + ', OUTPUT);';
		var pinSetupCode_CSpino_S1 = 'pinMode(' + pino_sensor_TCS3200_S1 + ', OUTPUT);';
		var pinSetupCode_CSpino_S2 = 'pinMode(' + pino_sensor_TCS3200_S2 + ', OUTPUT);';
		var pinSetupCode_CSpino_S3 = 'pinMode(' + pino_sensor_TCS3200_S3 + ', OUTPUT);';
		//var pinSetupCode_CSpino_OE = 'pinMode(' + pino_sensor_TCS3200_OE + ', INPUT);';
		var pinSetupCode_CSpino_OUT= 'pinMode(' + pino_sensor_TCS3200_OUT + ', INPUT);';
		//var pinSetupCodeB = 'pinMode(' + pino_sensor_TCS3200_LED + ', OUTPUT);';
		var setupCode_inicializa_pino_S0= 'digitalWrite(' + pino_sensor_TCS3200_S0 + ',HIGH);';
		var setupCode_inicializa_pino_S1= 'digitalWrite(' + pino_sensor_TCS3200_S1 + ',HIGH);';

		
		Blockly.Arduino.addSetup('io_' + pino_sensor_TCS3200_S0, pinSetupCode_CSpino_S0, false);
		Blockly.Arduino.addSetup('io_' + pino_sensor_TCS3200_S1, pinSetupCode_CSpino_S1, false);
		Blockly.Arduino.addSetup('io_' + pino_sensor_TCS3200_S2, pinSetupCode_CSpino_S2, false);
		Blockly.Arduino.addSetup('io_' + pino_sensor_TCS3200_S3, pinSetupCode_CSpino_S3, false);
		//Blockly.Arduino.addSetup('io_' + pino_sensor_TCS3200_OE, pinSetupCode_CSpino_OE, false);
		Blockly.Arduino.addSetup('io_' + pino_sensor_TCS3200_OUT, pinSetupCode_CSpino_OUT, false);
		// Blockly.Arduino.addSetup('io_' + pino_sensor_TCS3200_LED, pinSetupCode_CSpino_LED, false);
		Blockly.Arduino.addSetup('inicializa_pino_S0', setupCode_inicializa_pino_S0, false);
	    Blockly.Arduino.addSetup('inicializa_pino_S1', setupCode_inicializa_pino_S1, false);	
		
		 
		//Declara Funções
		var nome_funcao1 = 'le_valores_RGB';
		var nome_funcao2 = 'diferenca_valores_RGB';
		var nome_funcao3 = 'verifica_cor_TCS_3200';
		
		var func1 = ['void ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
		codigo_le_valores_RGB() + '}\n']; 
		var func2 = ['int ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
		codigo_diferenca_valores_RGB() + '}\n']; 
		var func3 = ['int ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
		codigo_verifica_cor_TCS_3200() + '}\n']; 

		var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));
		var funcName2 = Blockly.Arduino.addFunction(nome_funcao2, func2.join('\n'));
		var funcName3 = Blockly.Arduino.addFunction(nome_funcao3, func3.join('\n'));
		
		//----
		if (tipo_operador == '==' )
		{ 
		  var code = '(verifica_cor_TCS_3200() == ' + cor_base_TCS3200 +' )';
		} else if (tipo_operador == '!==' )
		{
		  var code = '(verifica_cor_TCS_3200() != ' + cor_base_TCS3200 + ' )';
		}
		
  }
  
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};


**/
