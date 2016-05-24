import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './author.component'
import {RouteConfig} from 'angular2/router';
import {HeroFormComponent} from './form.component'

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
                <courses></courses>
                <authors></authors>
                <hero-form></hero-form>`,
    directives :[CoursesComponent, AuthorsComponent, HeroFormComponent]
})
@RouteConfig([
	{path : '/contact', name: 'ContactUs', component: AuthorsComponent},
    {path: '*',  name: 'Home',       component: CoursesComponent}
])

export class AppComponent { }