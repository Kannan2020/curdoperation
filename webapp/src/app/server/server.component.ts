import { Component } from '@angular/core';

@Component({
     selector: 'app-server',
     templateUrl: './server.component.html',
     styles: [`.online { color:white}`]
})
export class ServerComponent {
     serverId = 10;
     status = 'Offline';
     constructor() {
          this.serverId = Math.floor(Math.random() * 6) + 1;
          this.status = Math.random() > 0.5 ? 'Online' : 'Offline';
     }
     getColor() {
          return this.status === 'Online' ? 'green' : 'red';
     }
}
