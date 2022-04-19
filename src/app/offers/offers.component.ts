import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from '@angular/router'
@Component ({
    selector: 'offers-component',
    templateUrl: 'offers.component.html',
    styleUrls: ['offers.component.scss', '../app.component.scss']
})

export class Offers {
    faUtensils = faUtensils;
    constructor(private router:Router, private activatedRoute:ActivatedRoute){}
    goToIndividualTraining(){
        console.log('aaa');
        this.router.navigate(['individual-training']);
        // this.router.navigate(['individual-training'], {relativeTo: this.activatedRoute});
        
    }
}