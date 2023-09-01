/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.CGRobot');

goog.require('Blockly.Arduino');




/*---------------------------------------------------------------------------*/

/*
Blockly.Blocks['motor1_Speed'] = {
  init: function() {
	
	 
	this.appendValueInput('motor1Speed')
        .setCheck('Number')
        .appendField('Set Motor 1 Speed to ');  
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    
  }
};



Blockly.Blocks['motor4_Speed'] = {
  init: function() {
	
	 
	this.appendValueInput('motor4Speed')
        .setCheck('Number')
        .appendField('Set Motor 4 Speed to ');  
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};




Blockly.Blocks['motor4_Direction'] = {
  init: function() {	 
	this.appendValueInput('motor4Direction')
        .setCheck('Number')
        .appendField('Set Motor 4 Direction to ');  
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};







Blockly.Blocks['motor1_Direction'] = {
  init: function() { 
	this.appendValueInput('motor1Direction')
        .setCheck('Number')
        .appendField('Set Motor 1 Direction to ');  
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};

*/  
// Set motor block code changed by Ram 

Blockly.Blocks['setMotor'] = {
  init: function() {
	  var motoroptions = [['D1', 'D1'], ['D2', 'D2'],['D3', 'D3'],['D4', 'D4']];
	  var directionOptions = [['FORWARD', 'FORWARD'], ['BACKWARD', 'BACKWARD'],['BRAKE', 'BRAKE']];
	  
	this.appendValueInput('motorSpeed')
        .setCheck('Number')
        .appendField('Turn Motor ')
		.appendField(new Blockly.FieldDropdown(motoroptions), 'motorChoice')
		.appendField('in ')
		.appendField(new Blockly.FieldDropdown(directionOptions), 'direction')
		.appendField('direction with speed ');
		
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
}

Blockly.Blocks['pwmMotorA'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("Speed Motor 'A' PIN#")
        .appendField(new Blockly.FieldDropdown([["D1","D1"]]), "PIN");
    this.appendValueInput("NUM", 'Number')
        .appendField("value")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write analog value between 0 and 255 to a specific Port');
  }
};

Blockly.Blocks['pwmMotorB'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("Speed Motor 'B' PIN#")
        .appendField(new Blockly.FieldDropdown([['D2','D2']]), "PIN");
    this.appendValueInput("NUM", 'Number')
        .appendField("value")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write analog value between 0 and 255 to a specific Port');
  }
};

Blockly.Blocks['dirMotorA'] = {
  helpUrl: 'http://arduino.cc/en/Reference/hellowrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
	    this.appendDummyInput()
        .appendField("dirMotor 'A' ")
        .appendField(new Blockly.FieldDropdown([['D3','D3']]), "PIN");
    this.appendDummyInput()
	       .appendField("State")
	       .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STATE");
	this.setInputsInline(true);       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write digital value to a specific Port');
  }
};

Blockly.Blocks['dirMotorB'] = {
  helpUrl: 'http://arduino.cc/en/Reference/hellowrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
	    this.appendDummyInput()
        .appendField("dirMotor 'B' ")
        .appendField(new Blockly.FieldDropdown([["D4","D4"]]), "PIN");
    this.appendDummyInput()
	       .appendField("State")
	       .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STATE");
	this.setInputsInline(true);       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write digital value to a specific Port');
  }
};
Blockly.Blocks['MoveForward'] = {
  init: function() { 
	this.appendValueInput('forwardSpeed')
        .setCheck('Number')
        .appendField('Move Robot Forward with speed');    
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};



Blockly.Blocks['MoveReverse'] = {
  init: function() { 
	this.appendValueInput('reverseSpeed')
        .setCheck('Number')
        .appendField('Move Robot Reverse with speed');    
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};




Blockly.Blocks['TurnLeft'] = {
  init: function() { 
	this.appendValueInput('leftSpeed')
        .setCheck('Number')
        .appendField('Turn Robot Left with speed');    
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};



Blockly.Blocks['TurnRight'] = {
  init: function() { 
	this.appendValueInput('rightSpeed')
        .setCheck('Number')
        .appendField('Turn Robot Right with speed');    
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};

Blockly.Blocks['Stop'] = {
  init: function() {
	this.appendDummyInput().appendField("Stop Robot");  	
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};





Blockly.Blocks.Direction={
	init:function()
	{
		
		
		var options = [['Clockwise', '1'], ['AntiClockwise', '0']];
		this.appendDummyInput().appendField(new Blockly.FieldDropdown(options), 'direction');;
		
		this.setOutput(!0,"Number");
		this.setColour(230);
		
	}
};

















