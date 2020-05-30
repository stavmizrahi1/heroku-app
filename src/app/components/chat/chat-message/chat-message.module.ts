import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatMessageComponent } from './chat-message.component';


@NgModule({
  declarations: [ChatMessageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ChatMessageComponent]
})
export class ChatMessageModule { }
