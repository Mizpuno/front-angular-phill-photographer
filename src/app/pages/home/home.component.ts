import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styles: `
        .bg-home {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                              url('https://wallpapershome.com/images/pages/ico_h/572.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    `,
    imports: [NgClass]
})

export class HomeComponent {}