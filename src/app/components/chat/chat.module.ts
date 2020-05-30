import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokenService } from '../auth/token.service';
import { SharedModule } from './../../shared/shared.module';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageModule } from './chat-message/chat-message.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { QuestionsComponent } from './questions/questions.component';




@NgModule({
  declarations: [
    ChatComponent,
    ChatMessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatMessageModule,
    ChatRoutingModule
  ],
  providers: [TokenService]
  // exports: [ChatComponent]
})
export class ChatModule { }
