import {NgModule} from "@angular/core";
import {AppRoutingModule}  from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.module";

import {CardComponent} from "./components/card/card.component";
import {CreateComponent} from "./components/create/create.component";
import {ContentComponent} from "./components/content/content.component";
import {ModalMessageComponent} from "./components/modalmessage/modalmessage.component";

import {CompleteTodoService} from "./services/completetodo.service";
import {DialogManagerService} from "./services/dialogmanager.service";
import {HttpRequestService} from "./services/httprequest.service";

import {CardStyleDirective} from "./directives/cardstyle.directive";

@NgModule({
  declarations: [
    CardComponent,
    CreateComponent,
    ContentComponent,
    ModalMessageComponent,
    CardStyleDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    CompleteTodoService,
    DialogManagerService,
    HttpRequestService
  ],
  bootstrap: [ContentComponent]
})

export class AppModule{}
