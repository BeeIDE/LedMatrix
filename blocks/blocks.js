Blockly.defineBlocksWithJsonArray([
  // -> Display
  {
    "type": "display_custom",
    "message0": "%4 %3 display show %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dotmatrix_rgb",
        "name": "value"
      },
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["", ""],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/matrix.png",
        "width": 45,
        "height": 45,
        "alt": "mic"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#009777",
    "tooltip": "",
    "helpUrl": ""
  },
]);