import { Component, Input } from "@angular/core";
import { environment } from "src/environments/environment";

const cloud = environment.ApiUrl + '/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {

    private _url = '';

    @Input() description = '';

    @Input() set url(url: string) {
        if(url && url.startsWith('data')) {
            this._url = url;
        } else {
            this._url = cloud + url;
        }
    }

    get url(){
        return this._url;
    }
};