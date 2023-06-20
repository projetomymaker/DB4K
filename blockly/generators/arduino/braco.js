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
 * @fileoverview Gerador de Código do DB4K para o braço robótico.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Arduino.braco');
goog.require('Blockly.Arduino');

//--------------------------------------------
//Generators included by RLQ - DB4K
//--------------------------------------------

//*******************************************************
//Inicializa Pinos etc.
//*******************************************************

// Carrega os valores dos pinos e outras variáveis do arquivo DB4K_setup.ini 
//para as variáveis globais DB4k_pino_xxxxxx


var pino_servo_base_braco=DB4K_pino_servo_base_braco;
var pino_servo_garra_braco=DB4K_pino_servo_garra_braco;
var pino_servo_direita_braco=DB4K_pino_servo_direita_braco;
var pino_servo_esquerda_braco=DB4K_pino_servo_esquerda_braco;

var min_servo_direita= DB4K_min_servo_direita;
var max_servo_direita= DB4K_max_servo_direita;
var min_servo_esquerda= DB4K_min_servo_esquerda;
var max_servo_esquerda= DB4K_max_servo_esquerda;
var min_servo_base= DB4K_min_servo_base;
var meio_servo_base= DB4K_meio_servo_base;
var max_servo_base= DB4K_max_servo_base;
var min_servo_garra= DB4K_min_servo_garra;
var max_servo_garra= DB4K_max_servo_garra;

var ext_servo_dir_pega_objeto = DB4K_ext_servo_dir_pega_objeto;
var ext_servo_esq_pega_objeto = DB4K_ext_servo_esq_pega_objeto;
var ext_servo_dir_solta_objeto = DB4K_ext_servo_dir_solta_objeto;
var ext_servo_esq_solta_objeto = DB4K_ext_servo_esq_solta_objeto;


var delay_movimento = DB4K_delay_movimento;


//*************************************************************************
//Código de uso comum para a geração de código wiring dos movimentos do braco robótico
//*************************************************************************

function inclui_servo(){
	
	Blockly.Arduino.addInclude('servo', '#include <Servo.h>');	
	
}

function declara_servos_braco(){
	
	Blockly.Arduino.addDeclaration('servo_base_braco', 'Servo ' + 'servo_base' + ';');
	Blockly.Arduino.addDeclaration('servo_garra_braco', 'Servo ' + 'servo_garra' + ';');
	Blockly.Arduino.addDeclaration('servo_direita_braco', 'Servo ' + 'servo_direita' + ';');
	Blockly.Arduino.addDeclaration('servo_esquerda_braco', 'Servo ' + 'servo_esquerda' + ';');
}

function reserva_pinos_braco(block){
	
  Blockly.Arduino.reservePin(
      block, pino_servo_base_braco, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, pino_servo_garra_braco , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, pino_servo_direita_braco, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, pino_servo_esquerda_braco, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
	
};


function declara_variaveis_pinos_braco(){
	
  Blockly.Arduino.definitions_['pino_servo_base_braco'] ='int pino_servo_base_braco= '+ pino_servo_base_braco +';';
  Blockly.Arduino.definitions_['pino_servo_garra_braco'] ='int pino_servo_garra_braco= '+ pino_servo_garra_braco +';';
  Blockly.Arduino.definitions_['pino_servo_direita_braco'] ='int pino_servo_direita_braco= '+ pino_servo_direita_braco +';';
  Blockly.Arduino.definitions_['pino_servo_esquerda_braco'] ='int pino_servo_esquerda_braco= '+ pino_servo_esquerda_braco +';';
  
};

function define_codigo_funcao_setup_braco(){
	
  declara_variaveis_pinos_braco();
	
  var setupCode1 = 'servo_base' + '.attach(' + "pino_servo_base_braco" + ');';
  var setupCode2 = 'servo_garra' + '.attach(' + "pino_servo_garra_braco" + ');';
  var setupCode3 = 'servo_direita' + '.attach(' + "pino_servo_direita_braco" + ');';
  var setupCode4 = 'servo_esquerda' + '.attach(' + "pino_servo_esquerda_braco" + ');';
  
  Blockly.Arduino.addSetup('servo_base_braco', setupCode1, true);
  Blockly.Arduino.addSetup('servo_garra_braco', setupCode2, true);
  Blockly.Arduino.addSetup('servo_direita_braco', setupCode3, true);
  Blockly.Arduino.addSetup('servo_esquerda_braco', setupCode4, true);

};


function declara_variaveis_globais_braco() {

  Blockly.Arduino.definitions_['pos_atual_servo_base'] = 'int pos_atual_servo_base;';
  Blockly.Arduino.definitions_['pos_atual_servo_garra'] = 'int pos_atual_servo_garra;';
  Blockly.Arduino.definitions_['pos_atual_servo_direita'] = 'int pos_atual_servo_direita;';
  Blockly.Arduino.definitions_['pos_atual_servo_esquerda'] = 'int pos_atual_servo_esquerda;';
  
  Blockly.Arduino.definitions_['min_servo_direita'] ='int min_servo_direita= '+ min_servo_direita +';';
  Blockly.Arduino.definitions_['max_servo_direita'] ='int max_servo_direita= '+ max_servo_direita +';';
  Blockly.Arduino.definitions_['min_servo_esquerda'] ='int min_servo_esquerda= '+ min_servo_esquerda +';';
  Blockly.Arduino.definitions_['max_servo_esquerda'] ='int max_servo_esquerda= '+ max_servo_esquerda +';';
  Blockly.Arduino.definitions_['min_servo_base'] ='int min_servo_base= '+ min_servo_base +';';
  Blockly.Arduino.definitions_['meio_servo_base'] ='int meio_servo_base= '+ meio_servo_base +';';
  Blockly.Arduino.definitions_['max_servo_base'] ='int max_servo_base= '+ max_servo_base +';';
  Blockly.Arduino.definitions_['min_servo_garra'] ='int min_servo_garra= '+ min_servo_garra +';';
  Blockly.Arduino.definitions_['max_servo_garra'] ='int max_servo_garra= '+ max_servo_garra +';';

  Blockly.Arduino.definitions_['ext_servo_dir_pega_objeto '] ='int ext_servo_dir_pega_objeto = '+ ext_servo_dir_pega_objeto  +';';
  Blockly.Arduino.definitions_['ext_servo_esq_pega_objeto '] ='int ext_servo_esq_pega_objeto = '+ ext_servo_esq_pega_objeto  +';';
  Blockly.Arduino.definitions_['ext_servo_dir_solta_objeto'] ='int ext_servo_dir_solta_objeto ='+ ext_servo_dir_solta_objeto +';';
  Blockly.Arduino.definitions_['ext_servo_esq_solta_objeto'] ='int ext_servo_esq_solta_objeto ='+ ext_servo_esq_solta_objeto +';';

  Blockly.Arduino.definitions_['delay_movimento'] ='int delay_movimento =' + delay_movimento +';';
  
  
}

//*************************************************************************
//Funcoes que retornam strings com os códigos das funcoes wiring utilizadas pelo braço
//*************************************************************************

function codigo_inicializa_braco(){
	
var codigo = 
' servo_base.write('+ 'meio_servo_base' +');\n' + 
' pos_atual_servo_base = servo_base.read();\n' +
' servo_direita.write(min_servo_direita);\n' +  
' pos_atual_servo_direita = servo_direita.read();\n' +
' servo_esquerda.write(min_servo_esquerda);\n' +   
' pos_atual_servo_esquerda = servo_esquerda.read();\n' +
' servo_garra.write(min_servo_garra);\n' + 
' pos_atual_servo_garra = servo_garra.read();\n';

return codigo;	
	
}

function codigo_retorna_posicao_inicial_servo_esquerda(){
	
var codigo = 
' int K;\n' +
' int pos = pos_atual_servo_esquerda;\n' +
' for ( K = pos; K >= min_servo_esquerda ; K = K - 1)\n' +
' {\n' +      
'  servo_esquerda.write(K);\n' +
'  pos_atual_servo_esquerda = servo_esquerda.read();\n' +
'  delay (delay_movimento/2);\n' +
' }\n';
return codigo;	
	
}

function codigo_retorna_posicao_inicial_servo_direita(){
	
var codigo = 
' int K;\n' +
' int pos = pos_atual_servo_direita;\n' + 
' for ( K = pos; K >= min_servo_direita ; K = K - 1)\n' + 
' {\n' + 
'  servo_direita.write(K);\n' + 
'  pos_atual_servo_direita = servo_direita.read();\n' + 
'  delay (delay_movimento/2);\n' + 
' }\n';

return codigo;	
	
}


function  codigo_abre_garra(){
	
var codigo =
' int K;\n' + 
' int pos = pos_atual_servo_garra;\n' + 
' for ( K = pos; K >= min_servo_garra ; K = K - 1)\n' +
' {\n' +      
'  servo_garra.write(K);\n' +
'  pos_atual_servo_garra = servo_garra.read();\n' + 
'  delay (delay_movimento);\n' +
' }\n';

return codigo;
	
}

function  codigo_fecha_garra(){
	
var codigo =
' int K;\n' + 
' int pos =  pos_atual_servo_garra;\n' + 
' for ( K = pos; K <= max_servo_garra ; K = K + 1)\n' + 
' { \n' +     
'   servo_garra.write(K);\n' + 
'   pos_atual_servo_garra = servo_garra.read();\n' + 
'   delay (delay_movimento); \n' + 
' }\n';

return codigo;	
	
}

function codigo_baixa_braco_sem_objeto(){
	
var codigo =
' int maximo =  ext_servo_dir_pega_objeto ;\n' + 
' int pos_direita;\n' + 
' int pos;\n' + 
' int K;\n' + 
' pos = pos_atual_servo_esquerda;\n' + 
' for ( K = pos; K >= min_servo_esquerda ; K = K - 1)\n' + 
' { \n' + 
'  servo_esquerda.write(K);\n' + 
'  pos_atual_servo_esquerda = servo_esquerda.read();\n' + 
'  delay (delay_movimento);\n' + 
' }\n' + 
' pos_direita = pos_atual_servo_direita;\n' + 
' pos = pos_direita;\n' + 
' for ( K = pos; K < maximo ; K = K + 1)\n' + 
' {\n' +       
'  if (pos_atual_servo_direita < maximo)\n' +  
'  {\n' + 
'      pos_direita = pos_direita + 1;\n' + 
'      servo_direita.write(pos_direita);\n' + 
'      pos_atual_servo_direita = servo_direita.read();\n' + 
'  }\n' + 
'  delay (delay_movimento);\n' + 
' }\n' + 
' pos =  pos_atual_servo_esquerda;\n' + 
' for ( K = pos; K < ext_servo_esq_pega_objeto; K = K + 1)\n' + 
' {\n' +       
'  if (pos_atual_servo_esquerda < max_servo_esquerda)\n' +  
'  {\n' + 
'      servo_esquerda.write(pos_atual_servo_esquerda + 1);\n' + 
'      pos_atual_servo_esquerda = servo_esquerda.read();\n' + 
'      delay (delay_movimento);\n' + 
'  }\n' + 
' }\n'; 

return codigo;	
	
}


function codigo_levanta_braco_com_objeto(){
	
var codigo = 
' int minimo;\n' + 
' int pos_direita = pos_atual_servo_direita;\n' + 
' int pos_esquerda = pos_atual_servo_esquerda;\n' + 
' bool nao_levantou = true;\n' +  
' while (nao_levantou)\n' +  
' {\n' + 
'    if (pos_direita > min_servo_direita)\n' + 
'    {\n' + 
'      pos_direita = pos_direita - 1;\n' + 
'      servo_direita.write(pos_direita);\n' + 
'      pos_atual_servo_direita = servo_direita.read();\n' + 
'    }\n' + 
'    if (pos_esquerda < max_servo_esquerda)\n' + 
'    {\n' + 
'      pos_esquerda = pos_esquerda + 1;\n' + 
'      servo_esquerda.write(pos_esquerda);\n' + 
'      pos_atual_servo_esquerda = servo_esquerda.read();\n' + 
'    }\n' + 
'    if ((pos_esquerda >= max_servo_esquerda)&&( pos_direita <= min_servo_direita))\n' + 
'    {\n' + 
'      nao_levantou = false;\n' + 
'    }\n' + 
'  delay (delay_movimento);\n' + 
' }\n';

return codigo;	
	
}


function codigo_baixa_braco_com_objeto(){
	
var codigo = 
' int pos;\n' + 
' int K;\n' + 
' pos = pos_atual_servo_direita;\n' + 
' for ( K = pos; K <= ext_servo_dir_solta_objeto ; K = K + 1)\n' + 
' {\n' +     
'  servo_direita.write(K);\n' + 
'  pos_atual_servo_direita = servo_direita.read();\n' + 
'  delay (delay_movimento);\n' + 
' }\n' + 
' pos = pos_atual_servo_esquerda;\n' + 
' for ( K = pos; K >= ext_servo_esq_solta_objeto ; K = K - 1)\n' + 
' {\n' +     
'  servo_esquerda.write(K);\n' + 
'  pos_atual_servo_esquerda = servo_esquerda.read();\n' + 
'  delay (delay_movimento);\n' + 
' }\n';

return codigo;	
	
}

function codigo_retorna_braco_sem_objeto(){
	
var codigo = 
' int pos;\n' + 
' int K;\n' + 
' pos = pos_atual_servo_esquerda;\n' + 
' for ( K = pos; K >= min_servo_esquerda ; K = K - 1)\n' + 
' {\n' +     
'  servo_esquerda.write(K);\n' + 
'  pos_atual_servo_esquerda = servo_esquerda.read();\n' + 
'  delay (delay_movimento);\n' + 
' }\n' + 
' pos = pos_atual_servo_direita;\n' + 
' for ( K = pos; K >= min_servo_direita ; K = K - 1)\n' + 
' {\n' +   
'  servo_direita.write(K);\n' + 
'  pos_atual_servo_direita = servo_direita.read();\n' + 
'  delay (delay_movimento);\n' + 
' }\n';

return codigo;	
	
}


function codigo_direita(){
	
var codigo = 
' int K;\n' + 
' int pos = pos_atual_servo_base;\n' + 
' for ( K = pos; K >= min_servo_base ; K = K - 1)\n' + 
' {\n' +  
'  servo_base.write(K);\n' + 
'  pos_atual_servo_base = servo_base.read();\n' + 
'  delay (delay_movimento);\n' + 
' }\n';

return codigo;	
	
}

function codigo_esquerda(){
	
var codigo = 
' int K;\n' + 
' int pos = pos_atual_servo_base;\n' + 
' for ( K = pos; K <= max_servo_base; K = K + 1)\n' + 
' {\n' +   
'  servo_base.write(K);\n' + 
'  pos_atual_servo_base = servo_base.read();\n' + 
'  delay (delay_movimento);\n' + 
' }\n'; 

return codigo;	
	
}

function codigo_centro(){
	
var codigo =
' int K;\n'+
' int pos = pos_atual_servo_base;\n'+
' if (pos > meio_servo_base)\n'+
' {\n'+
'  for ( K = pos; K >= 80 ; K = K - 1)\n'+
'   {\n'+
'    servo_base.write(K);\n'+
'    pos_atual_servo_base = servo_base.read();\n'+
'    delay (delay_movimento);\n'+
'   }\n'+
'    pos = pos_atual_servo_base;\n'+
'    for ( K = pos; K <= meio_servo_base ; K = K + 1)\n'+
'   {\n'+
'    servo_base.write(K);\n'+
'    pos_atual_servo_base = servo_base.read();\n'+
'    delay (delay_movimento);\n'+
'   }\n'+
' }else\n'+
' {\n'+
'  for ( K = pos; K <= meio_servo_base ; K = K + 1)\n'+
'   {\n'+
'    servo_base.write(K);\n'+
'    pos_atual_servo_base = servo_base.read();\n'+
'    delay (delay_movimento);\n'+
'   }\n'+
' }\n';

return codigo;	
	
}



//*************************************************************************
//*************************************************************************
//*************************************************************************
//Códigos dos Blocos da Garra
//*************************************************************************
//*************************************************************************
//*************************************************************************


//*************************************************************************
//Baixa o Braço, Pega o obejto e Levanta o Braço
//*************************************************************************

Blockly.Arduino['pegar_objeto'] = function(block) {

  // TODO: Assemble Arduino into code variable.
	  

  var nome_funcao1 = 'baixa_braco_sem_objeto';
  var nome_funcao2 = 'fecha_garra';
  var nome_funcao3 = 'levanta_braco_com_objeto';	

  var func1 = ['void ' + Blockly.Arduino.DEF_FUNC_NAME  + '()\n{\n' +
      codigo_baixa_braco_sem_objeto() + '}\n'];
	  
  var func2 = ['void ' + Blockly.Arduino.DEF_FUNC_NAME  + '()\n{\n' +
      codigo_fecha_garra() + '}\n'];
	  
  var func3 = ['void ' + Blockly.Arduino.DEF_FUNC_NAME  + '()\n{\n' +
      codigo_levanta_braco_com_objeto() + '}\n'];
	
  
  var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));
  var funcName2 = Blockly.Arduino.addFunction(nome_funcao2, func2.join('\n'));
  var funcName3 = Blockly.Arduino.addFunction(nome_funcao3, func3.join('\n'));

  inclui_servo();
  declara_servos_braco();
  reserva_pinos_braco(block);
  define_codigo_funcao_setup_braco();
  declara_variaveis_globais_braco(); 
  

  return funcName1 + '();\n' + 
		 funcName2 + '();\n' +
		 funcName3 + '();\n'; 

};


//*************************************************************************
//Solta o Obejeto e levanta o braço
//*************************************************************************

Blockly.Arduino['soltar_objeto'] = function(block) {

  // TODO: Assemble Arduino into code variable.
	 
  var nome_funcao1 = 'levanta_braco_com_objeto';
  var nome_funcao2 = 'baixa_braco_com_objeto';
  var nome_funcao3 = 'abre_garra';
  var nome_funcao4 = 'retorna_braco_sem_objeto';
  
  var func1 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_levanta_braco_com_objeto() + '}\n'];
	  
  var func2 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_baixa_braco_com_objeto() + '}\n'];
	  
  var func3 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_abre_garra() + '}\n'];
	  
  var func4 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_retorna_braco_sem_objeto() + '}\n'];	
  
  var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));
  var funcName2 = Blockly.Arduino.addFunction(nome_funcao2, func2.join('\n'));
  var funcName3 = Blockly.Arduino.addFunction(nome_funcao3, func3.join('\n'));
  var funcName4 = Blockly.Arduino.addFunction(nome_funcao4, func4.join('\n'));
	 
	  
  inclui_servo();
  declara_servos_braco();
  reserva_pinos_braco(block);
  define_codigo_funcao_setup_braco();
  declara_variaveis_globais_braco();
  
  return funcName1 + '();\n' + 
		 funcName2 + '();\n' +
		 funcName3 + '();\n' +
		 funcName4 + '();\n' ;
	 
};


//*************************************************************************
//Faz o braço robótico girar para a direita
//*************************************************************************

Blockly.Arduino['girar_braco_robotico_direita'] = function(block) {

  // TODO: Assemble Arduino into code variable.
  
  
  var nome_funcao1 = 'direita';
  var func1 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_direita() + '}\n'];
  var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));
	  
  inclui_servo();
  declara_servos_braco();
  reserva_pinos_braco(block);
  define_codigo_funcao_setup_braco();
  declara_variaveis_globais_braco();
  


  return funcName1 + '();\n' ;
	  
};


//*************************************************************************
//Faz o braço robótico girar para a esquerda
//*************************************************************************

Blockly.Arduino['girar_braco_robotico_esquerda'] = function(block) {

  // TODO: Assemble Arduino into code variable.
  
  var nome_funcao1 = 'esquerda';
  var func1 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_esquerda() + '}\n'];
  var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));
	  
  inclui_servo();
  declara_servos_braco();
  reserva_pinos_braco(block);
  define_codigo_funcao_setup_braco();
  declara_variaveis_globais_braco();


  return funcName1 + '();\n' ;
};


//*************************************************************************
//'Centraliza' o braço robótico
//*************************************************************************

Blockly.Arduino['centralizar_braco_robotico'] = function(block) {

  // TODO: Assemble Arduino into code variable.
	  
  var nome_funcao1 = 'centro';
  var func1 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_centro() + '}\n'];
  var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));
	  
  inclui_servo();
  declara_servos_braco();
  reserva_pinos_braco(block);
  define_codigo_funcao_setup_braco();
  declara_variaveis_globais_braco();

  return funcName1 + '();\n' ;
};

//*************************************************************************
//FInicializa o braco Robótico (Declara Variáveis Globais, setup, include, etc.)
//*************************************************************************

Blockly.Arduino['finalizar_braco'] = function(block) {

  // TODO: Assemble Arduino into code variable.
/**
  var nome_funcao1 = 'levanta_braco_com_objeto';
  var nome_funcao2 = 'baixa_braco_com_objeto';
  var nome_funcao3 = 'abre_garra';
  var nome_funcao4 = 'retorna_braco_sem_objeto';
  
  var func1 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_retorna_posicao_inicial_servo_direita() + '}\n'];
	  
   var func2 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
     codigo_retorna_posicao_inicial_servo_esquerda() + '}\n'];
	  
  var func3 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_centro() + '}\n'];
	  
  var func4 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_abre_garra() + '}\n'];	
  
  var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));
  var funcName2 = Blockly.Arduino.addFunction(nome_funcao2, func2.join('\n'));
  var funcName3 = Blockly.Arduino.addFunction(nome_funcao3, func3.join('\n'));
  var funcName4 = Blockly.Arduino.addFunction(nome_funcao4, func4.join('\n'));
    
  inclui_servo();
  declara_servos_braco();
  reserva_pinos_braco(block);
  define_codigo_funcao_setup_braco();
  declara_variaveis_globais_braco();
    

  return //funcName1 + '();\n' + 
	//	 funcName2 + '();\n' +
	//	 funcName3 + '();\n' +
	//	 funcName4 + '();\n' +
		 'while (true);\n';
		 
		 */
		 
return  'while (true);\n';
};

//*************************************************************************
//Cria um loop infinito para o braço parar a sequência programada
//*************************************************************************


Blockly.Arduino['inicializar_braco'] = function(block) {

  // TODO: Assemble Arduino into code variable.
	   
  var nome_funcao1 = 'inicializa_braco';
  var func1 = ['void ' +  Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
      codigo_inicializa_braco() + '}\n'];
  var funcName1 = Blockly.Arduino.addFunction(nome_funcao1, func1.join('\n'));  
	  
	  
	  
  inclui_servo();
  declara_servos_braco();
  reserva_pinos_braco(block);
  define_codigo_funcao_setup_braco();
  declara_variaveis_globais_braco();

  return funcName1 + '();\n' ;
};
