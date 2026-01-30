import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { routes } from "../app.routes";
import { displayRoutePipe } from "../pipes/display-route.pipe";

@Component({
    selector: 'c-navigation',
    template: `
        <div class='z-100 fixed bg-primary/80 backdrop-blur-md top-0 w-full grid grid-cols-7 gap-3 py-5 px-25'>
            <div class="col-span-2 flex flex-row items-center">
                <p class="text-4xl font-medium">B</p>
                <p class="text-2xl">ILLIC</p>
            </div>
            <div class="col-span-3 grid grid-cols-subgrid gap-3">
                @for (path of routePaths; track $index) {
                    <button class="border-transparent border-b hover:border-amber-50 p-2"
                            [routerLink]="[path]">{{ path | displayRoute }}</button>
                }
            </div>
            <div class="col-span-2 grid grid-cols-subgrid gap-3">
                <button class="col-start-2 bg-bright text-black p-2">nav.btn.get.start</button>
            </div>
        </div>
    `,
    styles: ``,
    imports: [RouterLink, displayRoutePipe]
})

export class NavigationComponent implements OnInit {
    routePaths: string[] = [];

    ngOnInit(): void {
        this.routePaths = routes
            .filter(r => r.path && !['', '**'].includes(r.path.toString()))
            .map(r => r.path as string);
    }
}