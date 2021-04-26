import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocklyComponent } from './blockly.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxBlocklyModule } from 'ngx-blockly';

const routes: Routes = [
  {
    path: '',
    component: BlocklyComponent
  }
];

@NgModule({
  declarations: [BlocklyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxBlocklyModule
  ]
})
export class BlocklyModule { }
