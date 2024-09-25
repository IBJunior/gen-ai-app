import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssistantComponent } from './components/assistant/assistant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AssistantComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gen AI App';
}
