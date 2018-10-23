import { NgModule } from "@angular/core";
import { ImmediateclickDirective } from "./immediate-click.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ImmediateclickDirective],
    exports: [ImmediateclickDirective],
    imports: [CommonModule]
})
export class ImmediateclickModule { }