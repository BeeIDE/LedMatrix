function check_if_top_block_has_hat(block){
   if (block.getRootBlock().hat === 'cap') return true;
   else return false;
}


Blockly.Python['matrix_display_custom'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLedMatrix_import_BeeLedMatrix'] = 'from BeeLedMatrix import BeeLedMatrix';

   port = block.getFieldValue('port');

   Blockly.Python.definitions_['ledMatrix_BeeLedMatrix'] = `ledMatrix = BeeLedMatrix(bee.${port})`;

   var code = `ledMatrix.picture(b"${block.getFieldValue('value')}")\n`;
   return code;
};

Blockly.Python['matrix_off'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLedMatrix_import_BeeLedMatrix'] = 'from BeeLedMatrix import BeeLedMatrix';

   port = block.getFieldValue('port');

   Blockly.Python.definitions_['ledMatrix_BeeLedMatrix'] = `ledMatrix = BeeLedMatrix(bee.${port})`;

   var code = `ledMatrix.off()\n`;
   return code;
};

Blockly.Python['matrix_clear'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLedMatrix_import_BeeLedMatrix'] = 'from BeeLedMatrix import BeeLedMatrix';

   port = block.getFieldValue('port');

   Blockly.Python.definitions_['ledMatrix_BeeLedMatrix'] = `ledMatrix = BeeLedMatrix(bee.${port})`;

   var code = `ledMatrix.clear()\n`;
   return code;
};

Blockly.Python['matrix_show'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLedMatrix_import_BeeLedMatrix'] = 'from BeeLedMatrix import BeeLedMatrix';

   port = block.getFieldValue('port');

   Blockly.Python.definitions_['ledMatrix_BeeLedMatrix'] = `ledMatrix = BeeLedMatrix(bee.${port})`;

   var code = `ledMatrix.show()\n`;
   return code;
};

Blockly.Python['matrix_color'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLedMatrix_import_BeeLedMatrix'] = 'from BeeLedMatrix import BeeLedMatrix';

   port = block.getFieldValue('port');

   Blockly.Python.definitions_['ledMatrix_BeeLedMatrix'] = `ledMatrix = BeeLedMatrix(bee.${port})`;

//    color = block.getFieldValue('color');
   var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
   var code = `ledMatrix.color(${color})\n`;
   return code;
};

Blockly.Python['matrix_text'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLedMatrix_import_BeeLedMatrix'] = 'from BeeLedMatrix import BeeLedMatrix';

   port = block.getFieldValue('port');

   Blockly.Python.definitions_['ledMatrix_BeeLedMatrix'] = `ledMatrix = BeeLedMatrix(bee.${port})`;

   var message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
   var delay = block.getFieldValue('delay');
   var code = `ledMatrix.text(${message}, ${delay})\n`;
   return code;
};

Blockly.Python['matrix_digit'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLedMatrix_import_BeeLedMatrix'] = 'from BeeLedMatrix import BeeLedMatrix';

   port = block.getFieldValue('port');

   Blockly.Python.definitions_['ledMatrix_BeeLedMatrix'] = `ledMatrix = BeeLedMatrix(bee.${port})`;

   var digit = Blockly.Python.valueToCode(block, 'digit', Blockly.Python.ORDER_ATOMIC);
   var code = `ledMatrix.digit(${digit})\n`;
   return code;
};
