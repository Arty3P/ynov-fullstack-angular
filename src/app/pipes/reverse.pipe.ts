import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {

	transform (value: string): unknown {
		return value.split('').reverse().join('');
	}

}
