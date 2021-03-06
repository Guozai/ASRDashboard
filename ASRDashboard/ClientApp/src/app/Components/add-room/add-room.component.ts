import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RoomService } from "../../services/room.service";

@Component({
  selector: "app-add-room",
  templateUrl: "./add-room.component.html",
  styleUrls: ["./add-room.component.css"]
})
export class AddRoomComponent implements OnInit {
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

  ngOnInit() { }

  save()
  {
    if(!this.roomForm.valid)
    {
      return;
    }
    this._roomService.saveRoom(this.roomForm.value).subscribe((data) => {
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
