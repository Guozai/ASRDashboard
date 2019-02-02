import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RoomService } from "../../services/room.service";

@Component({
  selector: "app-edit-room",
  templateUrl: "./edit-room.component.html",
  styleUrls: ["./edit-room.component.css"]
})
export class EditRoomComponent implements OnInit {
  roomForm: FormGroup;
  id: string;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _roomService: RoomService,
    private _router: Router)
  {
    if(this._avRoute.snapshot.params["id"])
    {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.roomForm = this._fb.group({
      roomId: ["", [Validators.required]],
    });
  }

  ngOnInit()
  {
    this._roomService.getRoomById(this.id).subscribe(resp => this.roomForm.setValue(resp),
      error => this.errorMessage = error);
  }

  save()
  {
    if(!this.roomForm.valid)
    {
      return;
    }
    this._roomService.updateRoom(this.roomForm.value).subscribe((data) => {
      this._router.navigate(["/fetch-room"]);
    }, error => this.errorMessage = error);
  }

  cancel()
  {
    this._router.navigate(["/fetch-room"]);
  }

  get roomId()
  {
    return this.roomForm.get("roomId");
  }
}
