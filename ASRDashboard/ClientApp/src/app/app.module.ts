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

import { SlotService } from "./services/slot.service";
import { FetchStaffComponent } from "./components/fetch-staff/fetch-staff.component";
import { EditStaffComponent } from "./Components/edit-staff/edit-staff.component";
import { FetchStudentComponent } from "./components/fetch-student/fetch-student.component";


import { DialogStaffComponent } from "./components/dialog-staff/dialog-staff.component";
import { DialogStudentComponent } from "./components/dialog-student/dialog-student.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddRoomComponent,
    FetchRoomComponent,
    FetchStaffComponent,
    FetchStudentComponent,
    EditStaffComponent,
    DialogStaffComponent,
    DialogStudentComponent
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
      { path: 'fetch-staff', component: FetchStaffComponent },
      { path: 'slot/staff/:id', component: FetchStaffComponent },
      { path: 'fetch-student', component: FetchStudentComponent },
      { path: 'slot/student/:id', component: FetchStudentComponent },
      { path: 'slot/edit/:roomId/:startTime/:staffId', component: EditStaffComponent },
      { path: 'dialog-staff', component: DialogStaffComponent },
      { path: 'dialog-student', component: DialogStudentComponent },
    ])
  ],
  providers: [RoomService, SlotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
