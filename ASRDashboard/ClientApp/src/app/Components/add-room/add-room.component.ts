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
  employeeForm: FormGroup;
  title: string = "Create";
  RoomID: string;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _roomService: RoomService,
    private _router: Router)
  {
    if(this._avRoute.snapshot.params["id"])
    {
      this.roomId = this._avRoute.snapshot.params["id"];
    }
    this.roomForm = this._fb.group({
      roomId: ["", [Validators.required]],
    });
  }

  ngOnInit()
  {
    this.title = "Edit";
    this._roomService.getRoomById(this.roomId).subscribe(resp => this.roomForm.setValue(resp),
      error => this.errorMessage = error);
  }

  save()
  {
    if(!this.roomForm.valid)
    {
      return;
    }
    if(this.title === "Create")
    {
      this._roomService.saveRoom(this.employeeForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-employee"]);
      }, error => this.errorMessage = error);
    }
    else if(this.title === "Edit")
    {
      this._roomService.updateRoom(this.employeeForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-employee"]);
      }, error => this.errorMessage = error);
    }
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
