import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './author.component'
import {RouteConfig} from 'angular2/router';
import {Control , ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {CustomValidator} from './customvalidator'
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
                <courses></courses>
                <authors></authors>
                <hero-form></hero-form>`,
    directives :[CoursesComponent, AuthorsComponent]
})
@RouteConfig([
	{path : '/contact', name: 'ContactUs', component: AuthorsComponent},
    {path: '*',  name: 'Home',       component: CoursesComponent}
])

export class AppComponent {
    
    form : ControlGroup;
    constructor(formbuilder : FormBuilder){
        this.form = formbuilder.group({
            username : ['', Validators.compose([CustomValidator.userValidate])],
            password: []
        })   
    }
 }