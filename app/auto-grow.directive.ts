import {Directive, ElementRef, Renderer} from 'angular2/core'
@Directive({
    selector : '[autoGrow]',
    host : {
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})
export class AutoGrowDirective {
    //_el : ElementRef;
    constructor(private el : ElementRef, private renderer : Renderer) {
    }
    onFocus() {
        this.renderer.setElementStyle(this.el, 'width', '200');
    }
    onmBlur() {
        this.renderer.setElementStyle(this.el, 'width', '100');
    }
}