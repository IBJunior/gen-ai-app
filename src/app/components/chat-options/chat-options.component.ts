import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChatOptionsService } from '../../services/chat-options/chat-options.service';
import { Subject } from '../../models/subject.enum';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-chat-options',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './chat-options.component.html',
  styleUrl: './chat-options.component.css'
})
export class ChatOptionsComponent {
  userName: string = "John";
  Subject = Subject;

  constructor(private chatOptionsService: ChatOptionsService) { }

  setSubjectSelected(subject: string) {
    this.chatOptionsService.setSubjectSelected(subject);
  }

  isSelected(subject: string): boolean {
    return this.chatOptionsService.getSubjectSelected() === subject.toLocaleLowerCase();
  }

}
