import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ChatOptionsComponent } from '../chat-options/chat-options.component';
import { AssistantService } from '../../services/assistant-service/assistant-service.service';
import { ConversationsService } from '../../services/conversations-service/conversations.service';
import { Conversation } from '../../models/conversation.model';











@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    MarkdownModule,
    NgFor,
    MatSidenavModule,
    MatToolbarModule,
    ChatOptionsComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatIconModule
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {
  completion: string = "";
  userInput: string = "";
  conversationHistory: Conversation[] = [];
  isResponding: boolean = true;
  isQuestionAsked: boolean = false;

  constructor(private assistantService: AssistantService, private conversationsService: ConversationsService) { }

  ngOnInit(): void {
    this.conversationsService.getConversationHistory().subscribe((conversations: Conversation[]) => {
      this.conversationHistory = conversations;
    });
  }

  initCompletion() {
    const question = this.userInput;
    this.userInput = "";
    this.completion = "";
    this.isQuestionAsked = true;
    this.conversationHistory.push({ question: question, answer: "" });
    this.assistantService.getDataStream(question).subscribe({
      next: (chunk: any) => {
        this.completion += chunk;

        if (chunk === true || chunk == "true") {

        } else {
          this.getLastConversation().answer = this.completion;
        }
      },
      error: (err: any) => {
        console.error('Error receiving data stream', err);
      },
      complete: () => {
        console.log('Data stream completed');
        this.conversationsService.createConversation({ question: question, answer: this.completion }).subscribe(() => {
          console.log('Conversation created');
        });
      }
    });
  }

  getLastConversation(): Conversation {
    return this.conversationHistory[this.conversationHistory.length - 1];
  }
}
