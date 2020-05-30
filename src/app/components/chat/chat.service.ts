import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigurationService } from 'src/app/provider/services/configuration.service';
import { AppConfig } from 'src/app/provider/configuration/api';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  selectedSuggestedQuestion$ = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient,
    private configService: ConfigurationService
  ) { }

  SendMessage(senderId, receiverId, receiverName, message): Observable<any> {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.sendMessage);

    return this.http.post(`${apiAddress}/${senderId}/${receiverId}`, {
      receiverId,
      receiverName,
      message
    });
  }

  GetAllMessages(senderId, receiverId): Observable<any> {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.getMessages);

    return this.http.get(`${apiAddress}/${senderId}/${receiverId}`);
  }

  markMessagesAsRead(senderId: string, receiverId: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/receiver-messages/${senderId}/${receiverId}`);
  }

  MarkAllMessages(): Observable<any> {
    return this.http.get(`${environment.baseApi}/mark-all-messages`);
  }
}
