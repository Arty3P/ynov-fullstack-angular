import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { RickModel } from "../../models/rick.model";
import { HttpService } from "../../services/http.service";
import { StoreService } from "../../store/store.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	title = 'L U I G I';
	showPre : boolean = true;
	color: string = 'red';
	boxes = [
		{ id: 1, color: 'red' },
		{ id: 2, color: 'blue' },
		{ id: 3, color: 'yellow' }
	]

	input : string = ''
	form : FormGroup = new FormGroup({
		'name' : new FormControl()
	})

	constructor (public storeService: StoreService, public httpService: HttpService) {}

	ngOnInit (): void {

		this.httpService.getItems().subscribe()

		const boxesInLocalStorage = JSON.parse(<string>localStorage.getItem('boxes'))
		if (boxesInLocalStorage === null || boxesInLocalStorage.length === 0) {
			localStorage.setItem('boxes', JSON.stringify(this.boxes))
		} else {
			this.boxes = boxesInLocalStorage
		}
	}

	get characters () {
		return this.storeService.characters;
	}

	get formName () {
		return this.form.get('name');
	}

	clickButton() {
		this.showPre = !this.showPre
	}

	showEmit (event: string) {
		alert(event);
	}

	removeBox (boxId : number) {
		this.boxes = this.boxes.filter(box => box.id !== boxId)
		localStorage.setItem('boxes', JSON.stringify(this.boxes))
	}

	addCharacter () {
		const character : RickModel = {
			id: Math.random(),
			name: this.formName?.value.toUpperCase(),
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			origin: {
				name: 'Mars'
			}
		}

		this.storeService.addCharacter(character)
		this.formName?.reset();
	}
}
