import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule,
        FormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule        
    ]
})
export class HomeModule {}