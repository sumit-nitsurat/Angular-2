import {Control} from 'angular2/common'
export class CustomValidator {
    static userValidate(control: Control) {
        if(control.value.indexOf('_')>=0)
        return null;
        return {underscorenotfound : true};
    }   
 }