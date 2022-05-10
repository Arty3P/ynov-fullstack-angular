import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreService } from "../store/store.service";

@Component({
	selector: 'app-box',
	templateUrl: './box.component.html',
	styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
	@Input() id : number = 0;
	@Input() text = '';
	@Input() color = 'red';
	@Input() clicked : boolean = false;
	@Input() timeout = 0;

	@Output() removeBox : EventEmitter<number> = new EventEmitter<number>();

	constructor () {
	}

	ngOnInit (): void {
	}

	ngOnDestroy () {
		clearTimeout(this.timeout)
	}

	onClick = () => {
		this.clicked = true;
		this.timeout = setTimeout(this.emitRemoveBox, 1000)
	}

	emitRemoveBox = () => {
		this.removeBox.emit(this.id)
	}
}
