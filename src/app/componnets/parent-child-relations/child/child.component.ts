import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: 'child.component.html'
})

export class Child {
    @Input() fromParent: string
    @Output() forParentEvent = new EventEmitter<string>();
    public inputText: string = '';

    sendToParent() {
        
        this.forParentEvent.emit(this.inputText);
    }
}