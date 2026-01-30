import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'displayRoute',
    standalone: true,
})

export class displayRoutePipe implements PipeTransform {
    transform(path: string) {
        return path
            .split('-')
            .map(p => /*'nav.btn.route.' + */ p)
            .join(' ');
    }
}