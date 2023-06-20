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
goog.provide('Blockly.Blocks.carrinho');
goog.require('Blockly.Blocks');


var cor_blocos_carrinho=270;

Blockly.Blocks['mover_carrinho_para_frente'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_carrinho);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/mover_carrinho_para_frente.png", 40, 40, "*"))
        .appendField("Mover carrinho para frente")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 0, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o carrinho andar para a frente');
  }
};



Blockly.Blocks['mover_carrinho_para_tras'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_carrinho);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/mover_carrinho_para_tras.png", 40, 40, "*"))
        .appendField("Mover carrinho para trás")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 12, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o carrinho andar para trás');
  }
};


Blockly.Blocks['virar_carrinho_para_direita'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_carrinho);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/virar_carrinho_para_direita.png", 40, 40, "*"))
        .appendField("Virar carrinho para direita")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 50, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o carrinho virar para o lado direito');
  }
};



Blockly.Blocks['virar_carrinho_para_esquerda'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_carrinho);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/virar_carrinho_para_esquerda.png", 40, 40, "*"))
        .appendField("Virar carrinho para esquerda")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 31, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o carrinho virar para o lado esquerdo');
  }
};

Blockly.Blocks['virar_carrinho_para_esquerda_ou_direita'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_carrinho);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/virar_carrinho_direita_esquerda.png", 40, 40, "*"))
        .appendField("Virar carrinho para qualquer lado")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 3, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o carrinho virar, aleatóreamente,  para o lado direito ou esquerdo');
  }
};


Blockly.Blocks['parar_carrinho'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_carrinho);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/parar_carrinho.png", 30, 30, "*"))
        .appendField("Parar carrinho")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 42, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o carrinho parar durante o tempo definido no bloco delay');
  }
};

Blockly.Blocks['finalizar_circuito'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_carrinho);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/parar_programa.png", 40, 40, "*"))
        .appendField("Finalizar o Circuito")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 2, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Finaliza o circuito');
  }
};


