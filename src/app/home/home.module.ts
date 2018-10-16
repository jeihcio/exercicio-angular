import { NgModule, OnInit } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule 
    ]
})
export class HomeModule {}