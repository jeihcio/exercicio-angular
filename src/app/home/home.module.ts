import { NgModule, OnInit } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class HomeModule {}