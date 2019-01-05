import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatTabsModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatFormFieldModule,
  MatGridListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule, 
  MatListModule,
  MatTooltipModule,
  MatCardModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule
  ],

  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule
  ],
})
export class NicekaraCustomMaterialModuleModule { }
