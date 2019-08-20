import { Component } from '@angular/core';

@Component({
     selector: 'app-servers',
     templateUrl: './servers.component.html'
})
export class ServersComponent {
     serverId = 10;
     status = 'Offline';
     allowAddNewServer = false;
     serverCreationStatus = 'No server was created';
     serverName = '';
     serverCreated = false;
     servers = ['Server-1', 'Server-2']
     constructor() {
          this.serverId = Math.floor(Math.random() * 6) + 1;
          setTimeout(() => { this.allowAddNewServer = true; }, 2000);
     }
     GetStatus() {
          return Math.random() > 0.5 ? 'Online' : 'Offline';
     }
     onCreateServer() {
          this.serverCreated = true;
          this.servers.push(this.serverName);
          this.serverCreationStatus = 'Server was created!';
     }
     onUpdateServerName(event: Event ) {
          this.serverName = (event.target as HTMLInputElement).value;
     }
}
