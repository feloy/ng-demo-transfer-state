import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule],
})
export class MyMaterialModule { }
