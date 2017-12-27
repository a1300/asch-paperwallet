import { Component } from '@angular/core';
 
@Component({
    selector: 'foot',
    templateUrl: './foot.component.html',
    styleUrls: ['./foot.component.css']
})
export class FootComponent {
    github: URL = new URL('https://github.com/a1300/asch-paperwallet')
    XAS_Account: string = 'APNCTHfrJ8ZfkWMD8WWSrTyTyAaNFwd65k'
}