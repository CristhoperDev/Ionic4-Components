import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}