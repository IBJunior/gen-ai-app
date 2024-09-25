import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatOptionsService {
  private subjectSelected: string = "";

  constructor() { }

  setSubjectSelected(subject: string) {
    this.subjectSelected = subject;
    console.log(this.subjectSelected);
  }

  getSubjectSelected(): string {
    return this.subjectSelected;
  }
}

