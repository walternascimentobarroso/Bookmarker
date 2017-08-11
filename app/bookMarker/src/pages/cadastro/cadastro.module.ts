import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(CadastroPage),
  ],
})
export class CadastroPageModule { }
