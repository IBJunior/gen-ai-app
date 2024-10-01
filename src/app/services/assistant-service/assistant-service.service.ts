import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatOptionsService } from '../chat-options/chat-options.service';
import { Subject } from '../../models/subject.enum';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {
  private baseUrl = 'http://localhost:8080/api/assistant/';

  constructor(private chatOptionsService: ChatOptionsService) { }


  getDataStream(userInput: string): Observable<any> {
    return new Observable(observer => {
      fetch(this.getApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: userInput })
      })
        .then(response => {
          const reader = response.body?.getReader();
          const decoder = new TextDecoder();

          const read = () => {
            reader?.read().then(({ done, value }) => {
              if (done) {
                observer.complete();
                return;
              }
              const chunk = decoder.decode(value, { stream: true });
              observer.next(chunk);
              read();
            }).catch(error => observer.error(error));
          };

          read();
        })
        .catch(error => observer.error(error));
    });
  }

  getApiUrl(): string {
    const subject = this.chatOptionsService.getSubjectSelected();
    if (subject === "default") {
      return this.baseUrl + Subject.INFORMATIONS.toLocaleLowerCase();
    }
    return this.baseUrl + subject;
  }
}
