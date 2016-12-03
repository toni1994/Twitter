import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "item-input", 
    template: 
    `
        <div class="input-group">
              <input type="text" class="form-control" [placeholder]="placeholder" #input (keyup.enter)="addItem(input)">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button" (click)="addItem(input)">+ Add</button>
              </span>
              <ng-content></ng-content>
        </div>
    `
})
export default class ItemInputComponent {
    @Input() public placeholder: string;
    @Output() public itemAdded: EventEmitter<string>;

    constructor(){
        this.placeholder = "Add new item";
        this.itemAdded = new EventEmitter<string>();
    }

    private addItem(input: HTMLInputElement){
        const value = input.value.trim();
        if(!value) { return; }

        input.value = "";
        this.itemAdded.emit(value);
    }
}