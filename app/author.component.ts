import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
import {ROUTER_DIRECTIVES} from 'angular2/router'
@Component({
    selector : 'authors',
    template : ` <h2> Authors </h2>
                    {{title}}
                    <ul>
                        <a [routerLink]= "['ContactUs']">hello there</a>
                        <a [routerLink]="['Home']"><li *ngFor="#author of authors">{{author}}</li></a>
                    </ul>`,
    providers: [AuthorService],
     directives: [ROUTER_DIRECTIVES]
})

export class AuthorsComponent {
    authors: string[];
    title ="Title of each authro";
    constructor(authorService : AuthorService) {
        this.authors = authorService.getAuthors();
    }
}