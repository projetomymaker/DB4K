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

goog.provide('Blockly.Blocks.atuadores');
goog.require('Blockly.Blocks');

/** Com o LED BRANCO
*Blockly.FieldColour.COLOURS = ['#0f0','#ff0','#f00','#fff'];
*Blockly.FieldColour.COLUMNS = 4;
*/

Blockly.FieldColour.COLOURS = ['#0f0','#ff0','#f00'];
Blockly.FieldColour.COLUMNS = 3;

var cor_acender_led = 160;
var cor_apagar_led = 140;
var cor_piscar_led = 167;
var cor_ledRGB = 95;
var cor_motor = 196;
var cor_servo = 184;
var cor_lcd = 328;
var cor_7Seg = 315; 
var cor_buzzer = 240; 
var pinoLedVermelho = DB4K_pino_LED_vermelho;
var pinoLedAmarelo = DB4K_pino_LED_amarelo;
var pinoLedVerde = DB4K_pino_LED_verde;
var pinoLedVermelho2 = DB4K_pino_LED_vermelho2;
var pinoLedAmarelo2 = DB4K_pino_LED_amarelo2;
var pinoLedVerde2 = DB4K_pino_LED_verde2;
var pinoLedVermelhoS = DB4K_pino_LED_vermelhoS;
var pinoLedAmareloS = DB4K_pino_LED_amareloS;
var pinoLedVerdeS = DB4K_pino_LED_verdeS;
var pinoDc = DB4K_pino_MotorDC;
var pinoServo = DB4K_pino_Servo_Motor;
var pinoBuzzer = DB4K_pino_buzzer;

Blockly.Blocks['acender_led'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_acender_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_on.png", 40, 40, "*"))
        .appendField("Acender o LED")
        .appendField(new Blockly.FieldDropdown([["Direita","1"],["Esquerda","2"]], function(option) { this.sourceBlock_.updateVariableField_(option); }), "porta_led")
        .appendField(new Blockly.FieldColour("#ff0000", function(color) { this.sourceBlock_.updateVariableField_(null, color);  }), "cor_led");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Acende o LED com a cor indicada.');

    this.variableField_ = null; // Variável para rastrear o campo de variável
    this.selectedOption_ = null; // Opção selecionada atualmente

    this.updateVariableField_();
  },

  updateVariableField_: function(option, color) {
    if (option !== this.selectedOption_ || color) {
      this.selectedOption_ = option;
      this.removeVariableField_();
      this.appendVariableField_(option, color);
    }
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_led");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(option, color) {
    var vars = this.getVarsFromOption_(option, color);
    if (vars.length > 0) {
      this.appendDummyInput("variavel_led")
          .appendField("              Porta:")
          .appendField(new Blockly.FieldTextInput(vars[0] || ""), "led_variable");
      this.variableField_ = this.getField("led_variable");
    }
  },

  getVarsFromOption_: function(option, color) {
    var corLed = color || this.getFieldValue('cor_led');
    var vars = [];

    if (option === '1') {
      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelho);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmarelo);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerde);
      }
    } else if (option === '2') {
      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelho2);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmarelo2);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerde2);
      }
    }

    return vars;
  },

  onchange: function() {
    var portaLed = this.getFieldValue('porta_led');
    this.updateVariableField_(portaLed);
  }
};

Blockly.Blocks['acender_ledS'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_acender_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_on.png", 40, 40, "*"))
        .appendField("Acender o LED Semáforo")
        .appendField(new Blockly.FieldColour("#ff0000", function(color) { this.sourceBlock_.updateVariableField_(null, color);  }), "cor_led");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Acende o LED com a cor indicada.');

    this.variableField_ = null; // Variável para rastrear o campo de variável
    this.selectedOption_ = null; // Opção selecionada atualmente

    this.updateVariableField_();
  },

  updateVariableField_: function(option, color) {
    if (option !== this.selectedOption_ || color) {
      this.selectedOption_ = option;
      this.removeVariableField_();
      this.appendVariableField_(option, color);
    }
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_led");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(option, color) {
    var vars = this.getVarsFromOption_(option, color);
    if (vars.length > 0) {
      this.appendDummyInput("variavel_led")
          .appendField("              Porta:")
          .appendField(new Blockly.FieldTextInput(vars[0] || ""), "led_variable");
      this.variableField_ = this.getField("led_variable");
    }
  },

  getVarsFromOption_: function(option, color) {
    var corLed = color || this.getFieldValue('cor_led');
    var vars = [];


      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelhoS);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmareloS);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerdeS);
      }
    

    return vars;
  },

  onchange: function() {
    var portaLed = this.getFieldValue('porta_led');
    this.updateVariableField_(portaLed);
  }
};



Blockly.Blocks['apagar_led'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_apagar_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_off_long.png", 48, 40, "*"))
        .appendField("Apagar o LED")
        .appendField(new Blockly.FieldDropdown([["Direita","1"],["Esquerda","2"]], function(option) { this.sourceBlock_.updateVariableField_(option); }), "porta_led")
        .appendField(new Blockly.FieldColour("#ff0000", function(color) { this.sourceBlock_.updateVariableField_(null, color);  }), "cor_led");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Apaga o LED com a cor indicada.');
    this.variableField_ = null; // Variável para rastrear o campo de variável
    this.selectedOption_ = null; // Opção selecionada atualmente

    this.updateVariableField_();
  },

  updateVariableField_: function(option, color) {
    if (option !== this.selectedOption_ || color) {
      this.selectedOption_ = option;
      this.removeVariableField_();
      this.appendVariableField_(option, color);
    }
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_led");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(option, color) {
    var vars = this.getVarsFromOption_(option, color);
    if (vars.length > 0) {
      this.appendDummyInput("variavel_led")
          .appendField("              Porta:")
          .appendField(new Blockly.FieldTextInput(vars[0] || ""), "led_variable");
      this.variableField_ = this.getField("led_variable");
    }
  },

  getVarsFromOption_: function(option, color) {
    var corLed = color || this.getFieldValue('cor_led');
    var vars = [];

    if (option === '1') {
      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelho);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmarelo);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerde);
      }
    } else if (option === '2') {
      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelho2);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmarelo2);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerde2);
      }
    }

    return vars;
  },

  onchange: function() {
    var portaLed = this.getFieldValue('porta_led');
    this.updateVariableField_(portaLed);
  }
};
Blockly.Blocks['apagar_ledS'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_apagar_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_off_long.png", 48, 40, "*"))
        .appendField("Apagar o LED Semáforo")
        .appendField(new Blockly.FieldColour("#ff0000", function(color) { this.sourceBlock_.updateVariableField_(null, color);  }), "cor_led");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Apaga o LED com a cor indicada.');
    this.variableField_ = null; // Variável para rastrear o campo de variável
    this.selectedOption_ = null; // Opção selecionada atualmente

    this.updateVariableField_();
  },

  updateVariableField_: function(option, color) {
    if (option !== this.selectedOption_ || color) {
      this.selectedOption_ = option;
      this.removeVariableField_();
      this.appendVariableField_(option, color);
    }
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_led");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(option, color) {
    var vars = this.getVarsFromOption_(option, color);
    if (vars.length > 0) {
      this.appendDummyInput("variavel_led")
          .appendField("              Porta:")
          .appendField(new Blockly.FieldTextInput(vars[0] || ""), "led_variable");
      this.variableField_ = this.getField("led_variable");
    }
  },

  getVarsFromOption_: function(option, color) {
    var corLed = color || this.getFieldValue('cor_led');
    var vars = [];


      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelhoS);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmareloS);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerdeS);
      }
    return vars;
  },

  onchange: function() {
    var portaLed = this.getFieldValue('porta_led');
    this.updateVariableField_(portaLed);
  }
};

  

Blockly.Blocks['piscar_led'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Devagar";
	var val_2 = '\u25CE' + "  " + "Velocidade Média";
    var val_3 = '\u25CB' + "  " + "Rápido";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_piscar_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_blink.png", 40, 40, "*"))
        .appendField("Piscar o LED")
        .appendField(new Blockly.FieldDropdown([["Direita","1"],["Esquerda","2"]], function(option) { this.sourceBlock_.updateVariableField_(option); }), "porta_led")
        .appendField(new Blockly.FieldColour("#ff0000", function(color) { this.sourceBlock_.updateVariableField_(null, color);  }), "cor_led")
		.appendField(new Blockly.FieldDropdown([[val_3, "high"],[val_2, "middle"],[val_1, "low"]]), "velocidade_blink"); 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Pisca o LED da cor indicada.');
    this.variableField_ = null; // Variável para rastrear o campo de variável
    this.selectedOption_ = null; // Opção selecionada atualmente

    this.updateVariableField_();
  },

  updateVariableField_: function(option, color) {
    if (option !== this.selectedOption_ || color) {
      this.selectedOption_ = option;
      this.removeVariableField_();
      this.appendVariableField_(option, color);
    }
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_led");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(option, color) {
    var vars = this.getVarsFromOption_(option, color);
    if (vars.length > 0) {
      this.appendDummyInput("variavel_led")
          .appendField("              Porta:")
          .appendField(new Blockly.FieldTextInput(vars[0] || ""), "led_variable");
      this.variableField_ = this.getField("led_variable");
    }
  },

  getVarsFromOption_: function(option, color) {
    var corLed = color || this.getFieldValue('cor_led');
    var vars = [];

    if (option === '1') {
      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelho);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmarelo);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerde);
      }
    } else if (option === '2') {
      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelho2);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmarelo2);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerde2);
      }
    }

    return vars;
  },

  onchange: function() {
    var portaLed = this.getFieldValue('porta_led');
    this.updateVariableField_(portaLed);
  }
};

Blockly.Blocks['piscar_ledS'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Devagar";
	var val_2 = '\u25CE' + "  " + "Velocidade Média";
    var val_3 = '\u25CB' + "  " + "Rápido";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_piscar_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_blink.png", 40, 40, "*"))
        .appendField("Piscar o LED Semáforo")
        .appendField(new Blockly.FieldColour("#ff0000", function(color) { this.sourceBlock_.updateVariableField_(null, color);  }), "cor_led")
		.appendField(new Blockly.FieldDropdown([[val_3, "high"],[val_2, "middle"],[val_1, "low"]]), "velocidade_blink"); 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Pisca o LED da cor indicada.');
    this.variableField_ = null; // Variável para rastrear o campo de variável
    this.selectedOption_ = null; // Opção selecionada atualmente

    this.updateVariableField_();
  },

  updateVariableField_: function(option, color) {
    if (option !== this.selectedOption_ || color) {
      this.selectedOption_ = option;
      this.removeVariableField_();
      this.appendVariableField_(option, color);
    }
  },

  removeVariableField_: function() {
    if (this.variableField_) {
      this.removeInput("variavel_led");
      this.variableField_ = null;
    }
  },

  appendVariableField_: function(option, color) {
    var vars = this.getVarsFromOption_(option, color);
    if (vars.length > 0) {
      this.appendDummyInput("variavel_led")
          .appendField("              Porta:")
          .appendField(new Blockly.FieldTextInput(vars[0] || ""), "led_variable");
      this.variableField_ = this.getField("led_variable");
    }
  },

  getVarsFromOption_: function(option, color) {
    var corLed = color || this.getFieldValue('cor_led');
    var vars = [];

       
      if (corLed === '#ff0000') {
        vars.push(""+pinoLedVermelhoS);
      } else if (corLed === '#ffff00') {
        vars.push(""+pinoLedAmareloS);
      } else if (corLed === '#00ff00') {
        vars.push(""+pinoLedVerdeS);
      }
    

    return vars;
  },

  onchange: function() {
    var portaLed = this.getFieldValue('porta_led');
    this.updateVariableField_(portaLed);
  }
};

Blockly.Blocks['girar_motor'] = {
  init: function() {
	var val_1 = '\u25CB' + "  " + "Devagar";
	var val_2 = '\u25CE' + "  " + "Velocidade Média";
    var val_3 = '\u25CF' + "  " + "Rápido";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_motor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/motor_move_2.png", 40, 40, "*"))
        .appendField("Girar Motor DC")
        .appendField(new Blockly.FieldDropdown([[val_3, "high"],[val_2, "middle"],[val_1, "low"]]), "velocidade_motor")
        .appendField("        Porta:")
        .appendField(new Blockly.FieldTextInput(pinoDc),"pino");    
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o motor DC girar na velocidade indicada.');
  }
};



Blockly.Blocks['parar_motor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_motor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/helice.png", 40, 40, "*"))
		.appendField("Parar Motor DC")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 63, 40, "*"))
    .appendField("        Porta:")
    .appendField(new Blockly.FieldTextInput(pinoDc),"pino");   
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o Motor DC  parar');
  },
};


/**Blockly.Blocks['mover_servomotor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/servo_move.png", 40, 40, "*"))
        .appendField("Mover Servo Motor para")
        .appendField(new Blockly.FieldDropdown([["Direita", "0"],["Frente", "80"], ["Esquerda","180"]]), "posicao_ponteiro_servo")
		.appendField("graus");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o ponteiro do Servo Motor mover-se para a posição indicada');
  }
}; */

/**Blockly.Blocks['mover_servomotor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/servo_move.png", 40, 40, "*"))
        .appendField("Mover Servo Motor para")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["30", "30"],["60", "60"],["90", "90"], ["120", "120"], ["150", "150"],["180", "180"]]), "posicao_ponteiro_servo")
		.appendField("graus");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o ponteiro do Servo Motor mover-se para a posição indicada');
  }
}; **/

Blockly.Blocks['mover_servomotor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/servo_move.png", 40, 40, "*"))
        .appendField("Mover Servo Motor para")
        .appendField(new Blockly.FieldAngle(90), "posicao_ponteiro_servo")
		.appendField("graus")
    .appendField("        Porta:")
    .appendField(new Blockly.FieldTextInput(pinoServo),"pino");  
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o ponteiro do Servo Motor mover-se para a posição indicada');
    this.variableField_ = null; // Variável para rastrear o campo de variável
  }
};
 

Blockly.Blocks['escrever_lcd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_lcd);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/lcd4.png", 40, 40, "*"))
        .appendField("Escrever")
        .appendField(new Blockly.FieldTextInput("Oi"), "value_texto")
        .appendField("na")
        .appendField(new Blockly.FieldDropdown([["linha 1", "1"], ["linha 2", "2"]]), "numero_linha");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Escreve um texto no display de LCD na linha indicada (Máximo de 16 letras e espaços em cada linha)');
  }
};

Blockly.Blocks['limpar_lcd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_lcd);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/limpar_lcd4.png", 40, 40, "*"))
		.appendField("Limpar Display")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 70, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Limpa o texto das duas linhas do discplay de LCD');
  }
  
};

Blockly.Blocks['escrever_display_7s']={
init:function(){
this.setHelpUrl('http://www.example.com/');
this.setColour(cor_7Seg);
this.appendDummyInput()
.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/display7SegOn.png", 40, 40, "*"))
.appendField("Escrever ")
.appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"]]),"numerosD7S")
.appendField("no Display de 7 Segmentos");
this.setPreviousStatement(true);
this.setNextStatement(true);
this.setTooltip('');
}
};


Blockly.Blocks['limpar_display_7s']={
init:function(){
this.setHelpUrl('http://www.example.com/');
this.setColour(cor_7Seg);
this.appendDummyInput()
.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/display7SegOff.png", 40, 40,"*"))
.appendField("Limpar Display de 7 Segmentos")
.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 63, 40, "*"));
this.setPreviousStatement(true);
this.setNextStatement(true);
this.setTooltip('');
}
};


Blockly.Blocks['led_rgb'] = {
  init: function() {
var colourRed = new Blockly.FieldColour('#ffffff');
colourRed.setColours(['#f00','#fff']).setColumns(2);
var colourGreen = new Blockly.FieldColour('#ffffff');
colourGreen.setColours(['#0f0','#fff']).setColumns(2);
var colourBlue = new Blockly.FieldColour('#ffffff');
colourBlue.setColours(['#00f','#fff']).setColumns(2); 
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_ledRGB);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_RGB.png", 40, 40, "*"))
        .appendField("Acender Luz  ")
		.appendField(colourRed, "luzVermelha")
		.appendField(colourGreen, "luzVerde")
		.appendField(colourBlue, "luzAzul")
        .appendField(" do LED RGB");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
}; 


Blockly.Blocks['tocar_nota_buzzer'] = {
  init: function() {
	  
    var grave = '\u25CF' + "  " + "Grave";
	var medio = '\u25CE' + "  " + "Médio";
    var agudo = '\u25CB' + "  " + "Agudo";
	
	var natural = '  '+ '\u0020' + '  Natural';
    var bemol =  '  ' + '\u266D' + '  Bemol';
    var sustenido = '  ' +'\u266F' + '  Sustenido';
	
	
	
	this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_notas.png", 40, 40, "*"))
        .appendField("Tocar nota")
        .appendField(new Blockly.FieldDropdown([["Dó", "do"], ["Ré", "re"], ["Mi", "mi"],
												["Fá", "fa"], ["Sol", "sol"], ["Lá", "la"],
												["Si", "si"]]), "nota_musical")
        .appendField(new Blockly.FieldDropdown([[medio, "4"],[grave, "3"], [agudo, "5"]]), "altura")	
        .appendField(new Blockly.FieldDropdown([[natural, "n"],[bemol, "b"], [sustenido, "s"]]), "acidente")									
	    .appendField("no Buzzer")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 26, 40, "*"))
    .appendField("Porta:")
    .appendField(new Blockly.FieldTextInput(pinoBuzzer),"pino");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar a nota especificada');
  },
};

Blockly.Blocks['parar_som_buzzer'] = {
  init: function() { 	
	this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_notone.png", 40, 40, "*"))
        .appendField("Silenciar Buzzer")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 28, 40, "*"))
    .appendField("Porta:")
    .appendField(new Blockly.FieldTextInput(pinoBuzzer),"pino");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar a nota especificada')
  },
};

Blockly.Blocks['tocar_sirene_buzzer'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Lento";
	var val_2 = '\u25CB' + "  " + "Rápido";
	this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_sirente.png", 40, 40, "*"))
        .appendField("Tocar Sirene")
        .appendField(new Blockly.FieldDropdown([[val_2, "0"],[val_1, "1"]]), "velocidade")
	    .appendField("no Buzzer")
      .appendField("Porta:")
      .appendField(new Blockly.FieldTextInput(pinoBuzzer),"pino");  		
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar sirene na velocidade especificada');
   
  },
};

