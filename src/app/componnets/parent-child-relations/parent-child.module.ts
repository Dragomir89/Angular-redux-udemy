import { NgModule } from "@angular/core";
import { Parent } from './parent/parent.component';
import { Child } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [Parent, Child],
    imports: [FormsModule],
    providers: [],
    exports: [Parent]
})

export class ParentChldModule {}