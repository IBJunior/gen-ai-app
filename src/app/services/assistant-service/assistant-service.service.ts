import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class AssistantService {
  private apiUrl = 'http://localhost:8080/api/assistant/faq';


  getDataStream(userInput: string): Observable<any> {
    return new Observable(observer => {
      fetch(this.apiUrl, {
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
}
