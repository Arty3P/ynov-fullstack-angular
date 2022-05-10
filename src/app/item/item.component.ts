import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	@Input() title = '';
	@Output() showTitle : EventEmitter<string> = new EventEmitter<string>();

	constructor () {
	}

	ngOnInit (): void {
	}

	emitEvent() {
		this.showTitle.emit(this.title)
	}

}
