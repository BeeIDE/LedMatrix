Blockly.defineBlocksWithJsonArray([
// -> Led Matrix
{
  "type": "matrix_display_custom",
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
      "alt": "matrix"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#005873",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "matrix_off",
  "message0": "%2 %1 turn off",
  "args0": [
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
      "alt": "matrix"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#005873",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "matrix_clear",
  "message0": "%2 %1 clear",
  "args0": [
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
      "alt": "matrix"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#005873",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "matrix_show",
  "message0": "%2 %1 show",
  "args0": [
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
      "alt": "matrix"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#005873",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "matrix_color",
  "message0": "%3 %2 set color %1",
  "args0": [
    {
//      "type": "field_colour_hsv_sliders",
      "type": "input_value",
      "name": "color"
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
      "alt": "matrix"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#005873",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "matrix_text",
  "message0": "%4 %3 display %1 delay %2",
  "args0": [
    {
      "type": "input_value",
      "name": "message"
    },
    {
      "type": "field_number",
      "name": "delay",
      "value": 300,
      "min": 0,
      "max": 2000,
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
      "alt": "matrix"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#005873",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "matrix_digit",
  "message0": "%3 %2 show number %1",
  "args0": [
    {
      "type": "input_value",
      "name": "digit"
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
      "alt": "matrix"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#005873",
  "tooltip": "",
  "helpUrl": ""
},
]);