import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";

import { RoomService } from "./services/room.service";
import { AddRoomComponent } from "./components/add-room/add-room.component";
import { FetchRoomComponent } from "./components/fetch-room/fetch-room.component";
import { EditRoomComponent } from "./Components/edit-room/edit-room.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddRoomComponent,
    FetchRoomComponent,
    EditRoomComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-room', component: FetchRoomComponent },
      { path: 'add-room', component: AddRoomComponent },
      { path: 'room/edit/:id', component: EditRoomComponent },
    ])
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
