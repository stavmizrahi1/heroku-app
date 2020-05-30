import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminSettingComponent } from './admin-setting.component';



@NgModule({
  declarations: [AdminSettingComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [AdminSettingComponent],
  providers: []
})
export class AdminSettingModule { }
