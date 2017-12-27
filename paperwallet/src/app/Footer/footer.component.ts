import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { RouterLink } from '@angular/router/src/directives/router_link';
 
@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    github: URL = new URL('https://github.com/a1300/asch-paperwallet')
    XAS_Account: string = 'APNCTHfrJ8ZfkWMD8WWSrTyTyAaNFwd65k'
}