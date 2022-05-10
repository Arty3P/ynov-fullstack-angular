import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ErrorInterceptor } from "./interceptors/error.interceptor";

import { NotFoundComponent } from './views/errors/not-found/not-found.component';

const routes: Routes = [
	{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
	{
		path: 'dashboard',
		loadChildren: () => import('./views/dashboard/dashboard.module')
			.then((module) => module.DashboardModule)
	},
	{path: 'errors/not-found', component: NotFoundComponent},
	{path: '**', redirectTo: 'errors/not-found'},
]

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [{
		provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
	}],
	bootstrap: [AppComponent]
})

export class AppModule {
}
