import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { EmojiPickerModule } from 'ng2-emoji-picker';
// import { FileUploadModule } from 'ng2-file-upload';
// import { NgxAutoScrollModule } from 'ngx-auto-scroll';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TokenInterceptor } from '../components/auth/token-interceptor';


@NgModule({
  declarations: [
  ],
  exports: [

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // NgxAutoScrollModule,
    // FileUploadModule,
    // InfiniteScrollModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // NgxAutoScrollModule,
    // FileUploadModule,
    // InfiniteScrollModule,
    // EmojiPickerModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
