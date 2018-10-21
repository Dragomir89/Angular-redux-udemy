import { CounterService } from './counter.service';
import { CounterComponent } from './counter/counter.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[CounterComponent],
    imports:[HttpModule],
    providers:[CounterService],
    exports:[CounterComponent]
})

export class CounterMoule { }