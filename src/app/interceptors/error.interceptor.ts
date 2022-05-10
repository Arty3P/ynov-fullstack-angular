import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Router } from "@angular/router";
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor (public router: Router) {
	}

	intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request)
			.pipe(
				catchError((error: any) => {
					console.log(error);
					this.router.navigate(['/errors/not-found'])
					throw error;
				})
			);
	}
}
