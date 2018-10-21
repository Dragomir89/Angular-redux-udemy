import { Component } from "@angular/core";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})

export class Parent {
    public forChild: string = 'This data is from parent !!!';
    public fromChild: string;


    receiveDataFromChild(data) {
        this.fromChild = data;
    }
}