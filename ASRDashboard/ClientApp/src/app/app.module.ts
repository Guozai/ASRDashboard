import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { RoomService } from "./services/room.service";
import { AddRoomComponent } from "./components/add-room/add-room.component";
import { FetchRoomComponent } from "./components/fetch-room/fetch-room.component";
import { SlotService } from "./services/slot.service";
import { AddSlotComponent } from "./components/add-slot/add-slot.component";
import { FetchSlotComponent } from "./components/fetch-slot/fetch-slot.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddRoomComponent,
    FetchRoomComponent,
    AddSlotComponent,
    FetchSlotComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-room', component: FetchRoomComponent },
      { path: 'add-room', component: AddRoomComponent },
      { path: 'room/edit/:id', component: AddRoomComponent },
      { path: 'fetch-slot', component: FetchSlotComponent },
      { path: 'slot/edit/:id', component: AddSlotComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
