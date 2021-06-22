import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharePostComponent } from './share-post/share-post.component';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons'
import {ShareIconsModule} from 'ngx-sharebuttons/icons'


@NgModule({
  declarations: [
    AuthenticationComponent,
    SharePostComponent
  ],
  imports: [
    CommonModule,
    ShareButtonsModule.withConfig({
      debug:true,
    }),
    ShareIconsModule
  ],
  exports:[
    AuthenticationComponent,
    SharePostComponent
  ]
})
export class SocialMediaModule { }
