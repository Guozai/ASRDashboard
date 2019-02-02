import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { RoomService } from "../../services/room.service";

@Component({
  selector: "app-fetch-room",
  templateUrl: "./fetch-room.component.html",
  styleUrls: ["./fetch-room.component.css"]
})
export class FetchRoomComponent {
  roomList: RoomData[];

  constructor(public http: Http, private _router: Router, private _roomService: RoomService)
  {
    this.getRooms();
  }

  getRooms()
  {
    this._roomService.getRooms().subscribe(data => this.roomList = data);
  }

  delete(roomId)
  {
    const ans = confirm("Do you want to delete room " + roomId);
    if(ans)
    {
      this._roomService.deleteRoom(roomId).subscribe((data) =>
        {
          this.getRooms();
        },
        error => console.error(error));
    }
  }
}

interface RoomData {
  roomId: string;
  slot: string;
}
