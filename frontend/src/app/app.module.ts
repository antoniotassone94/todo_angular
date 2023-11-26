import {NgModule} from "@angular/core";
import {AppRoutingModule}  from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {CardComponent} from "./components/card/card.component";
import {CreateComponent} from "./components/create/create.component";
import {ContentComponent} from "./components/content/content.component";
import {MainComponent} from "./components/main/main.component";

import {HttpRequestService} from "./services/httprequest.service";

@NgModule({
  declarations: [
    CardComponent,
    CreateComponent,
    ContentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpRequestService
  ],
  bootstrap: [MainComponent]
})

export class AppModule{}
