import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './components/data/data.component';
import { DataItemsComponent } from './components/data-items/data-items.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
//importing the routerModule and Routes for switching between different pages
import { FormsModule } from '@angular/forms';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { MyLocationComponent } from './components/my-location/my-location.component';
// import { SharePostComponent } from './components/share-post/share-post.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
const tabs: Routes = [
  { path: '', component: AuthenticateComponent },
  { path: 'data', component: DataComponent },
  //path"" is for our homepage
  { path: 'forms', component: FormsComponent },
  { path: 'data/map', component: MyLocationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    DataItemsComponent,
    FormsComponent,
    AuthenticateComponent,
    MyLocationComponent,
    // SharePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(tabs),
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
