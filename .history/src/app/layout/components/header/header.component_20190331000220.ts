import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;

  constructor(private translate: TranslateService, public router: Router) {
    this.translate.addLangs(['ar', 'en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/ar|en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.pushRightClass = 'push-right';
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
       const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
 //   dom.classList.addLangs('rtl');
   // dom.classList.removeItem('rtl');
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  changeLang(language: string) {
    const dom: any = document.querySelector('body');

    if (language === 'ar' &&  dom.classList.toggle('rtl') !== true) {
    dom.classList.toggle('rtl');
    }

    if (language === 'en' &&  dom.classList.toggle('rtl') !== false) {
      dom.classList.toggle('rtl');
      }
    this.translate.use(language);
  }
}
