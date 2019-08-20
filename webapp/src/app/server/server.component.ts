import { Component } from '@angular/core';

@Component({
     selector: 'app-server',
     templateUrl: './server.component.html'
})
export class ServerComponent {
     serverId = 10;
     status = 'Offline';
     allowAddNewServer = false;
     serverCreationStatus = "No server was created";
     constructor() {
          setTimeout(() => { this.allowAddNewServer = true }, 2000)
     }
     GetStatus() {
          return this.status;
     }
     onCreateServer() {
          this.serverCreationStatus = "Server was created!";
     }
}