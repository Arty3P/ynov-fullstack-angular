import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { BoxComponent } from "../../box/box.component";
import { ItemComponent } from "../../item/item.component";
import { ReversePipe } from "../../pipes/reverse.pipe";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
	{ path: '', component: DashboardComponent }
]

@NgModule({
	declarations: [
		DashboardComponent,
		ItemComponent,
		BoxComponent,
		ReversePipe,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	]
})
export class DashboardModule {
}
