import { Component } from "@angular/core";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

@Component ({
    selector: 'offers-component',
    templateUrl: 'offers.component.html',
    styleUrls: ['offers.component.scss', '../app.component.css']
})

export class Offers {
    faUtensils = faUtensils;
}