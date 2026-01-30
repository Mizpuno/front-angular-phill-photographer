import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'services-page',
    templateUrl: './services.component.html',
    styles: ''
})

export class ServicesComponent {
    constructor(
        private activatedRoute: ActivatedRoute
    ) {
        console.log (activatedRoute)
    }
}

