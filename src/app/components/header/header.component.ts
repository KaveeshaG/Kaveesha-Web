import { Component, OnInit, SkipSelf } from '@angular/core'
import { JitCompilerFactory } from '@angular/platform-browser-dynamic'
import * as $ from 'jquery'
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var sliderMain = function () {
      $('#banner .flexslider').flexslider({
        animation: 'fade',
        slideshowSpeed: 5000,
        directionNav: true,
        start: function () {
          setTimeout(function () {
            $('.slider-text').removeClass('animated fadeInUp')
            $('.flex-active-slide')
              .find('.slider-text')
              .addClass('animated fadeInUp')
          }, 500)
        },
        before: function () {
          setTimeout(function () {
            $('.slider-text').removeClass('animated fadeInUp')
            $('.flex-active-slide')
              .find('.slider-text')
              .addClass('animated fadeInUp')
          }, 500)
        },
      })

      $('#banner .flexslider .slides > li').css('height', $(window).height())
      $(window).resize(function () {
        $('#banner .flexslider .slides > li').css('height', $(window).height())
      })
    }
  }
}
