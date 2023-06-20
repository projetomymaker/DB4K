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
goog.provide('Blockly.Blocks.braco');
goog.require('Blockly.Blocks');


var cor_blocos_braco=50;

Blockly.Blocks['pegar_objeto'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_braco);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/pegar_objeto.png", 40, 40, "*"))
        .appendField("Pegar Objeto")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 1, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o braço robótico levantar');
  }
};

Blockly.Blocks['soltar_objeto'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_braco);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/soltar_objeto.png", 40, 40, "*"))
        .appendField("Soltar Objeto")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 1, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o braço robótico abaixar');
  }
};

Blockly.Blocks['girar_braco_robotico_direita'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_braco);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/girar_braco_direita.png", 40, 40, "*"))
        .appendField("Girar o Braço Robótico para a Direita")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 9, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o braço robótico girar para a direita');
  }
};

Blockly.Blocks['girar_braco_robotico_esquerda'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_braco);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/girar_braco_esquerda.png", 40, 40, "*"))
        .appendField("Girar o Braço Robótico para a Esquerda");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o braço robótico girar para a esquerda');
  }
};

Blockly.Blocks['centralizar_braco_robotico'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_braco);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/centralizar_braco.png", 40, 40, "*"))
        .appendField("Girar o Braço Robótico para o Centro")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 7, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o braço robótico ir para a posição inicial');
  }
};

Blockly.Blocks['finalizar_braco'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_braco);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/parar_programa.png", 40, 40, "*"))
        .appendField("Finalizar Sequência")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 30, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Fecha a Garra do Braço Robótico');
  }
};

Blockly.Blocks['inicializar_braco'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_braco);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/inicializar_braco.png", 40, 40, "*"))
        .appendField("Inicializar Braço Robótico");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Abre a Garra do Braço Robótico');
  }
};