import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form/photo-form.component";
import { PhotoListModule } from "./photo-list/photo-list-module";
import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form-module";

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule {}