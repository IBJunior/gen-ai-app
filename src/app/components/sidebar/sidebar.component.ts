import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChatOptionsService } from '../../services/chat-options/chat-options.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private chatOptionsService: ChatOptionsService) { }

  goToSubjects() {
    this.chatOptionsService.subjectSelectedEvent.emit();
  }
}
