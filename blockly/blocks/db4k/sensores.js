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

goog.provide('Blockly.Blocks.sensores');
goog.require('Blockly.Blocks');


var pino_sensor_toque = DB4K_pino_sensor_toque;
var pino_sensor_toque1 = DB4K_pino_sensor_toque1;
var pino_sensor_toque2 = DB4K_pino_sensor_toque2;
var pino_sensor_toque3 = DB4K_pino_sensor_toque3;
var pinoPotenciometro = DB4K_pino_analogico_potenciometro;

var pinoLuz = DB4K_pino_analogico_LDR_luz;

var cor_sensores = 65;

Blockly.Blocks['sensor_luz'] = {
  init: function() {
	var val_1 = '\u25CB' + "  " + "Fraca";
	var val_2 = '\u25CE' + "  " + "Ambiente";
	var val_3 = '\u25CF' + "  " + "Forte";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_luz.png", 40, 40, "*"))
        .appendField("Luz")	
	    .appendField(new Blockly.FieldDropdown([[val_3, "forte"],[val_2,"ambiente"],[val_1, "fraca"]]), "luminosidade")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 8, 40, "*"))
    .appendField("Porta:")
    .appendField(new Blockly.FieldTextInput(pinoLuz),"pino");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');

  },
};
  
Blockly.Blocks['sensor_temperatura'] = {
  init: function() {
	var val_1 = '\u25CB' + "  " + "Baixa";
	var val_2 = '\u25CE' + "  " + "Ambiente";
	var val_3 = '\u25CF' + "  " + "Alta";
	var graus_centigrados = 'C';
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_temperatura.png", 40, 40, "*"))
        .appendField("Temperatura")
        .appendField(new Blockly.FieldDropdown([[val_3,"alta"],[val_2,"ambiente"],[val_1,"baixa"]]), "temperatura");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sensor_distancia'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_distancia.png", 40, 40, "*"))
        .appendField("Distância")
        .appendField(new Blockly.FieldDropdown([["> maior que", "maior"],["< menor que", "menor"]]), "operador")
        .appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.numberValidator), "distancia")	
        .appendField("cm");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sensor_linha'] = {
  init: function() {
	var val_pouco = '\u25CB' + "  " + "Pouco";
    var val_muito = '\u25CF' +  "  " +  "Muito";
    var val_direito = "Direito " + '\u25BA';
    var val_esquerdo = '\u25C4' + " Esquerdo";
	this.setColour(cor_sensores);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_refletancia.png", 40, 40, "*"))
        .appendField(new Blockly.FieldDropdown([[val_pouco, "POUCO"],[val_muito, "MUITO"]]), "REFLEXO")
		.appendField("Reflexo no lado")
        .appendField(new Blockly.FieldDropdown([[val_direito, "DIREITA"], [val_esquerdo, "ESQUERDA"]]), "DIRECAO");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['potenciometro'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Alto";
	var val_2 = '\u25CE' + "  " + "Médio";
    var val_3 = '\u25CB' + "  " + "Baixo";
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/potenciometro.png", 40, 40, "*"))
        .appendField("Potenciômetro")
        .appendField(new Blockly.FieldDropdown([[val_1,"ALTO"], [val_2,"MEDIO"], [val_3 ,"BAIXO"]]), "potenciometro")
        .appendField("Porta:")
        .appendField(new Blockly.FieldTextInput(pinoPotenciometro),"pino");
    this.setOutput(true, null);
    this.setColour(cor_sensores);
    this.setNextStatement(false);
    
  },
};

Blockly.Blocks['sensor_toque'] = {
  init: function() {
    var val_1 = '\u25CF' + "  " + "Pressionado";
    var val_2 = '\u25CB' + "  " + "Solto";
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/botao.png", 40, 40, "*"))
        .appendField("Botão")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]], function(option) { this.sourceBlock_.updateVariableField_(option); }), "porta_botao")
        .appendField(new Blockly.FieldDropdown([[val_1,"1"], [val_2,"0"]]), "BOTAO");

    this.variableField_ = null; // Variável para rastrear o campo de variável
    this.selectedOption_ = null; // Opção selecionada atualmente

    this.updateVariableField_();
    this.setOutput(true, null);
    this.setColour(cor_sensores);
    this.setTooltip('');
    this.setHelpUrl('');
  },

  updateVariableField_: function(option) {
    if (option !== this.selectedOption_) {
      this.selectedOption_ = option;
      this.removeVariableField_();
      this.appendVariableField_(option);
    }
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_botao");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(option) {
    var vars = this.getVarsFromOption_(option);
    if (vars.length > 0) {
      this.appendDummyInput("variavel_botao")
          .appendField("              Porta:")
          .appendField(new Blockly.FieldTextInput(vars[0] || ""), "botao_variable");
      this.variableField_ = this.getField("botao_variable");
    }
  },

  getVarsFromOption_: function(option) {
    var vars = [];

    if (option === '1') {
      vars.push("" + pino_sensor_toque);
    } else if (option === '2') {
      vars.push("" + pino_sensor_toque1);
    } else if (option === '3') {
      vars.push("" + pino_sensor_toque2);
    } else if (option === '4') {
      vars.push("" + pino_sensor_toque3);
    }

    return vars;
  },

  onchange: function() {
    var portaBotao = this.getFieldValue('porta_botao');
    this.updateVariableField_(portaBotao);
  }
};




/**
 Blockly.Blocks['sensor_cor'] = {
  init: function() {
	  
    var cores_sensor = new Blockly.FieldColour("#ff0000");
    cores_sensor.setColours(['#0f0','#00f','#f00','#000','#fff']).setColumns(5);
	  
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_cor.png", 40, 40, "*"))
        .appendField("Cor")
        .appendField(new Blockly.FieldDropdown([["igual a", "igual"], ["diferende de", "diferente"]]), "operador")
        .appendField(cores_sensor, "cor")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png",1, 40, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

**/
