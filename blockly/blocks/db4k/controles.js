/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview dbkBlocks On Blockly.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Blocks.controles');
goog.require('Blockly.Blocks');


var cor_controles = 32;
var cor_delay_parar = 40;
var cor_repeticao = 25;
var cor_selecao = 10;


  Blockly.Blocks['delay'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_delay_parar);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/delay.png", 25, 25, "*"))
        .appendField("Esperar")
        .appendField(new Blockly.FieldDropdown([["Muito pouco", "125"],["Metadade de meio segundo", "250"],["Meio segundo", "500"],["1 segundo", "1000"],["2 segundos", "2000"], ["3 segundos", "3000"], ["5 segundos", "5000"], ["10 segundos", "10000"]]), "milisegundos");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o programa esperar alguns segundos antes de executar o próximo comando');
  }
};


Blockly.Blocks['repetir'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_repeticao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/loop.png", 40, 40, "*"))
        .appendField("Repetir")
        .appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "numero_repeticoes")
        .appendField("vezes")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 17, 40, "*"));
	this.setInputsInline(true);
    this.appendStatementInput("blocos_dbk");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o programa repetir algumas vezes os comandos colocados dendro desse bloco');
  }
};

Blockly.Blocks['parar_repeticao_do_programa'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_delay_parar);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/parar_programa.png", 40, 40, "*"))
        .appendField("Parar Programa")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 27, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Força a parada do repetição do programa definitivamente');
  }
};

Blockly.Blocks['condicional_simples'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_selecao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/interrogacao_se.png", 40, 40, "*"));
    this.appendValueInput("condicao")
        .appendField("Se");
    this.appendDummyInput()
        .appendField("então")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 0, 40, "*"));
    this.appendStatementInput("codigo_condicional");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Executa os comandos internos se a condição especificada for atendida');
  }
};

Blockly.Blocks['condicional_completo'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_selecao );
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/interrogacao_se.png", 40, 40, "*"));
    this.appendValueInput("condicao")
        .appendField("Se");
    this.appendDummyInput()
        .appendField("então")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 0, 40, "*"));
    this.appendStatementInput("codigo_condicional");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/seta_senao.png", 40, 17, "*"))
        .appendField("Senão")
		//.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 42, 17, "*"))
    this.appendStatementInput("codigo_execcao");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['enquanto'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_repeticao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/enquanto.png", 40, 40, "*"))
        .appendField("Enquanto");
    this.appendValueInput("condicao");
    this.appendDummyInput()
        .appendField("faça")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 11, 40, "*"));
    this.appendStatementInput("codigo_enquanto");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Executa os comandos internos enquanto a condição especificada for atendida');
  }
};


