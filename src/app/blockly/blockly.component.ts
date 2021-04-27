import { Component, OnInit } from "@angular/core";
import { NgxBlocklyConfig, NgxBlocklyGeneratorConfig } from "ngx-blockly";
declare var Blockly: any;

@Component({
  selector: "app-blockly",
  templateUrl: "./blockly.component.html",
  styleUrls: ["./blockly.component.scss"],
})
export class BlocklyComponent implements OnInit {
  public config: NgxBlocklyConfig = {
    toolbox: `<xml id="toolbox" style="display: none">
                <category name="Predefined Blocks" colour="140">
                  <block type="controls_if"></block>
                  <block type="controls_repeat_ext"></block>
                  <block type="logic_compare"></block>
                  <block type="math_number"></block>
                  <block type="math_arithmetic"></block>
                  <block type="text"></block>
                  <block type="text_print"></block>
                </category>
                <sep css-container="yourClassName"></sep>
                <category name="Custom Blocks" colour="220">
                  <block type="string_length"></block>
                  <block type="foreach_list"></block>
                  <block type="variables_get"></block>
                  <block type="variables_set"></block>
                  <block type="example_checkbox"></block>
                </category>
             </xml>`,
    scrollbars: true,
    trashcan: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
    },
  };
  public generatorConfig: NgxBlocklyGeneratorConfig = {
    javascript: true,
  };

  constructor() {
    /***Define a custom blocks***/
    Blockly.Blocks["string_length"] = {
      init: function () {
        this.appendValueInput("VALUE")
          .setCheck("String")
          .appendField("Length of");
        this.setOutput(true, "Number");
        // this.setPreviousStatement(true);
        // this.setNextStatement(true);
        this.setColour(160);
      },
    };

    Blockly.Blocks["foreach_list"] = {
      init: function () {
        this.appendDummyInput()
          .appendField("for each")
          .appendField("item")
          .appendField(new Blockly.FieldVariable());
        this.appendValueInput("LIST")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("in list");
        this.appendStatementInput("DO").appendField("do");
        this.setColour(260);
      },
    };

    // Block for variable getter.
    Blockly.Blocks["variables_get"] = {
      init: function () {
        this.appendDummyInput().appendField(
          new Blockly.FieldVariable("VAR_NAME"),
          "FIELD_NAME"
        );
        this.setOutput(true, null);
        this.setColour(260);
      },
    };

    // Block for variable setter.
    Blockly.Blocks["variables_set"] = {
      init: function () {
        this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("set")
          .appendField(new Blockly.FieldVariable("VAR_NAME"), "FIELD_NAME")
          .appendField("to");
        this.setOutput(true, null);
        this.setColour(260);
      },
    };

    Blockly.Blocks['example_checkbox'] = {
      init: function() {
        this.appendDummyInput()
            .appendField('checkbox:')
            .appendField(new Blockly.FieldCheckbox(true), 'FIELDNAME');
        this.setColour(160);
      }
    };

    /***Define a custom block ends***/

    /***Define generation function for dynamic block***/
    Blockly.JavaScript["string_length"] = function (block) {
      var argument0 =
        Blockly.JavaScript.valueToCode(
          block,
          "VALUE",
          Blockly.JavaScript.ORDER_FUNCTION_CALL
        ) || "''";
      return [argument0 + ".length", Blockly.JavaScript.ORDER_MEMBER];
    };

    Blockly.JavaScript["foreach_list"] = function (block) {
      let code = "";
      return code;
    };

    Blockly.JavaScript["variables_get"] = function (block) {
      let code = "";
      return code;
    };

    Blockly.JavaScript["variables_set"] = function (block) {
      let code = "";
      return code;
    };

    Blockly.JavaScript["example_checkbox"] = function (block) {
      let code = "";
      return code;
    };
    /***Define generation function for dynamic block end***/
  }

  ngOnInit() {}

  onCode(event) {
    console.log(event);
  }
}
