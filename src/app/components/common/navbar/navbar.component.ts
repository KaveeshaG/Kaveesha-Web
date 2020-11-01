import { Component, OnInit } from '@angular/core'
import * as $ from 'jquery'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // preloader
    $('#status').fadeOut() // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow') // will fade out the white DIV that covers the website.
  }
}
