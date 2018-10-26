import { Directive, OnInit } from "@angular/core";
import { ElementRef } from "@angular/core";
import { PlatformDetectorService } from "../../../core/platform-detector/platform-detector.service";
import { $$ } from "protractor";

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateclickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlatformDetectorService
    ) {}

    ngOnInit(): void {
        this.platFormDetector.isPlatformBrowser &&
            this.element.nativeElement.click();
    }
}