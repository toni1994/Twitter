import { Component, Input } from '@angular/core';

@Component({
    selector: "progress-bar", 
    template: 
    `
        <ngb-progressbar [type]="getProgressBarType()" [value]="value"></ngb-progressbar>
    `
})
export default class ProgressBarComponent {
    @Input() public value: number;

    private getProgressBarType(): string {
        if(this.value < 40) { return "danger"; }
        else if (this.value >= 40 && this.value < 100) { return "info"; }
        else { return "success"; }
    }
}