import { Directive, ElementRef, Renderer, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";
import { Photo } from "../../photo/photo";

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto: Photo;

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService
    ){}

    ngOnInit(): void {
        this.userService
            .getUser()
            .subscribe(user => {
                if(user.id != this.ownedPhoto.userId) {
                    this.renderer
                        .setElementStyle(this.element.nativeElement, 'display', 'none');
                }
            })
    }
}