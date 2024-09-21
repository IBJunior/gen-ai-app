import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { NgFor } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainContentComponent } from '../main-content/main-content.component';










@Component({
  selector: 'app-assistant',
  standalone: true,
  imports: [NgFor, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, FormsModule, SidebarComponent, MainContentComponent],
  templateUrl: './assistant.component.html',
  styleUrl: './assistant.component.css',
})
export class AssistantComponent implements OnInit {
  increment: number = 0;
  completion: string = "";
  isSidebarOpen: boolean = true;
  userInput: string = '';

  constructor(private dataService: DataService) { }
  ngOnInit() {
    //this.initCompletion();
  }




  initCompletion() {
    // You may want to use this.userInput here
    // this.dataService.getDataStream().subscribe({
    //   next: (chunk) => {
    //     this.completion += chunk;
    //   },
    //   error: (err) => {
    //     console.error('Error receiving data stream', err);
    //   },
    //   complete: () => {
    //     console.log('Data stream completed');
    //   }
    // });
  }
}
