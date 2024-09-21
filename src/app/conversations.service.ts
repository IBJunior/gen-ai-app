import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversation } from './models/conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  private apiUrl = 'http://localhost:8080/api/conversation-history';
  httpClient = inject(HttpClient);

  constructor() { }

  getConversationHistory(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  createConversation(conversation: Conversation): Observable<any> {
    return this.httpClient.post(this.apiUrl, conversation);
  }
}
