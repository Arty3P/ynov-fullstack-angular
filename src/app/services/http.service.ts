import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { RickModel } from "../models/rick.model";
import { StoreService } from "../store/store.service";

@Injectable({
	providedIn: 'root'
})

export class HttpService {

	constructor (public httpClient: HttpClient, public storeService: StoreService) {
	}

	getItems = () => {
		return this.httpClient.get<{ results: Array<RickModel> }>('https://rickandmortyapi.com/api/character')
			.pipe(
				map(({ results }) => {
					const characters = results.map((character) => {
						return {
							...character,
							name: character.name.toUpperCase()
						}
					});

					this.storeService.saveCharacters(characters);
					return characters;
				})
			)
	}
}
