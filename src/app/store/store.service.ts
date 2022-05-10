import { Injectable } from '@angular/core';
import { RickModel } from "../models/rick.model";

@Injectable({
	providedIn: 'root'
})
export class StoreService {

	characters : Array<RickModel> = [];

	constructor () {
	}

	saveCharacters (characters: Array<RickModel>) {
		this.characters = characters;
	}

	addCharacter (character: RickModel) {
		this.characters.push(character)
	}
}
