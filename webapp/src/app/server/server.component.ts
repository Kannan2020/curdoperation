import { Component } from '@angular/core';

@Component({
     selector: 'app-server',
     templateUrl: './server.component.html'
})
export class ServerComponent {
     serverId = 10;
     status = 'Offline';
     allowAddNewServer = false;
     serverCreationStatus = 'No server was created';
     serverName = '';
     serverCreated = false;
     constructor() {
          setTimeout(() => { this.allowAddNewServer = true; }, 2000);
     }
     GetStatus() {
          return this.status;
     }
     onCreateServer() {
          this.serverCreated = true;
          this.serverCreationStatus = 'Server was created!';
     }
     onUpdateServerName(event: Event ) {
          this.serverName = (event.target as HTMLInputElement).value;
     }
}
