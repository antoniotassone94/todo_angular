import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "./components/card/card.component";
import {CreateComponent} from "./components/create/create.component";
import {ContentComponent} from "./components/content/content.component";
import {MainComponent} from "./components/main/main.component";

@NgModule({
  declarations: [
    CardComponent,
    CreateComponent,
    ContentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})

export class AppModule{}
