import { Component, OnInit } from '@angular/core';

import { AppConfig } from './../../app.config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private config: AppConfig) { 
    console.log('[config.test] firebase.apiKey =', config.get('firebase').apiKey);
  }

  ngOnInit() {
  }

}
