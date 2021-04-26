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
               
                  <block type="controls_if"></block>
                  <block type="controls_repeat_ext"></block>
                  <block type="logic_compare"></block>
                  <block type="math_number"></block>
                  <block type="math_arithmetic"></block>
                  <block type="text"></block>
                  <block type="text_print"></block>
                <sep css-container="yourClassName"></sep>
                  <block type="string_length"></block>
             </xml>`,
    scrollbars: true,
    trashcan: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2
    },
  };
  public generatorConfig: NgxBlocklyGeneratorConfig = {
    javascript: true,
  };

  constructor() {
    //define a custom block
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

    //Add generation function for dynamic block
    Blockly.JavaScript["string_length"] = function (block) {
      var argument0 =
        Blockly.JavaScript.valueToCode(
          block,
          "VALUE",
          Blockly.JavaScript.ORDER_FUNCTION_CALL
        ) || "''";
      return [argument0 + ".length", Blockly.JavaScript.ORDER_MEMBER];
    };
  }

  ngOnInit() {}

  onCode(event) {
    console.log(event);
  }
}
