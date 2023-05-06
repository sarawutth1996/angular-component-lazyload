import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetRequestComponent } from './get-request/get-request.component';

@NgModule({
  declarations: [
    GetRequestComponent
  ],
  imports: [CommonModule],
  exports: [
    GetRequestComponent
  ],
})
export class ServiceModule {}
