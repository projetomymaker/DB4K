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
    .appendField('');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');

    this.updateVariableField_();
  },

  updateVariableField_: function() {
    var vars = this.getVars();
    var currentVars = this.getVarsFromField_();

    // Verifica se o campo de variável precisa ser atualizado
    if (!currentVars || currentVars.toString() !== vars.toString()) {
      this.removeVariableField_();
      this.appendVariableField_(vars);
    }
  },

  getVarsFromField_: function() {
    if (this.variableField_) {
      var luzVariable = this.variableField_.getValue();
      if (luzVariable) {
        return luzVariable.split(",");
      }
    }
    return null;
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_luz");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(vars) {
    this.appendDummyInput("variavel_luz") 
        .appendField("         Porta:")
        .appendField(new Blockly.FieldTextInput(vars[0] || ""), "luz_variable");
    this.variableField_ = this.getField("luz_variable");
  },

  getVars: function() {
    var vars = [];
    vars.push(''+pinoLuz);
    return vars;
  },

  onchange: function() {
    this.updateVariableField_();
  }
};
  
Blockly.Blocks['bluetooth_connect'] = {
  init: function() {
  this.appendDummyInput()
  .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/bluetooth.png", 40, 40, "*"))
  .appendField("Conectar ao Bluetooth")
  .appendField("\nPino de Recebimento ")
  .appendField(new Blockly.FieldDropdown([["Porta 1","porta1"], ["Porta 2","porta2"], ["Porta 3","porta3"]]), "rxd")
  .appendField("\nPino de Transmissão: ")
  .appendField(new Blockly.FieldDropdown([["Porta 4","porta4"], ["Porta 5","porta5"], ["Porta 6","porta6"]]), "txd");
  this.appendValueInput("texto")
  .setCheck("String")
  .appendField("Enviar texto");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(cor_sensores);
  this.setTooltip("Estabelece uma conexão Bluetooth e envia texto");
  this.setHelpUrl("");
  }
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
        .appendField(new Blockly.FieldDropdown([[val_1,"ALTO"], [val_2,"MEDIO"], [val_3 ,"BAIXO"]]), "potenciometro");
    this.setOutput(true, null);
    this.setColour(cor_sensores);
    this.setNextStatement(false);
    
    this.updateVariableField_();
  },

  updateVariableField_: function() {
    var vars = this.getVars();
    var currentVars = this.getVarsFromField_();

    // Verifica se o campo de variável precisa ser atualizado
    if (!currentVars || currentVars.toString() !== vars.toString()) {
      this.removeVariableField_();
      this.appendVariableField_(vars);
    }
  },

  getVarsFromField_: function() {
    if (this.variableField_) {
      var potenciometroVariable = this.variableField_.getValue();
      if (potenciometroVariable) {
        return potenciometroVariable.split(",");
      }
    }
    return null;
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_potenciometro");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(vars) {
    this.appendDummyInput("variavel_potenciometro")
        .appendField("              Porta:")
        .appendField(new Blockly.FieldTextInput(vars[0] || ""), "potenciometro_variable");
    this.variableField_ = this.getField("potenciometro_variable");
  },

  getVars: function() {
    var vars = [];
    vars.push(''+pinoPotenciometro);
    return vars;
  },

  onchange: function() {
    this.updateVariableField_();
  }
};

Blockly.Blocks['sensor_toque'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Pressionado";
    var val_2 = '\u25CB' + "  " + "Solto";
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/botao.png", 40, 40, "*"))
        .appendField("Botão")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"] , ["4","4"]]), "porta_botao")
        .appendField(new Blockly.FieldDropdown([[val_1,"1"], [val_2,"0"]]), "BOTAO");
    this.setOutput(true, null);
    this.setColour(cor_sensores);
    this.setTooltip('');
    this.setHelpUrl('');

    
    this.variableField_ = null; // Variável para rastrear o campo de variável

    this.updateVariableField_();
  },

  updateVariableField_: function() {
    var vars = this.getVars();
    var currentVars = this.getVarsFromField_();

    // Verifica se o campo de variável precisa ser atualizado
    if (!currentVars || currentVars.toString() !== vars.toString()) {
      this.removeVariableField_();
      this.appendVariableField_(vars);
    }
  },

  getVarsFromField_: function() {
    if (this.variableField_) {
      var buttonVariable = this.variableField_.getValue();
      if (buttonVariable) {
        return buttonVariable.split(",");
      }
    }
    return null;
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_button");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(vars) {
    this.appendDummyInput("variavel_button")
        .appendField("              Porta:")
        .appendField(new Blockly.FieldTextInput(vars[0] || ""), "button_variable");
    this.variableField_ = this.getField("button_variable");
  },

  getVars: function() {
    var portaBotao = this.getFieldValue('porta_botao');
    var vars = [];

    switch(portaBotao){
      case '1':
        vars.push(""+pino_sensor_toque)
        break;
      case '2':
        vars.push(""+pino_sensor_toque1)
        break;      
      case '3':
        vars.push(""+pino_sensor_toque2)
        break;
      case '4':
        vars.push(""+pino_sensor_toque3)
        break;        
    }
    return vars;
  },

  onchange: function() {
    this.updateVariableField_();
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