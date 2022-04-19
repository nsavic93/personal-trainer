import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component ({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls:["../app.component.scss" , "./home.component.scss"]
})
export class HomeComponent {
    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // localStorage.getItem('lang' || 'en')
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        // localStorage.getItem('lang' || 'en')
      }
}