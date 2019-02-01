import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SlotService } from "../../services/slot.service";

@Component({
  selector: "app-add-slot",
  templateUrl: "./add-slot.component.html",
  styleUrls: ["./add-slot.component.css"]
})
export class AddSlotComponent implements OnInit {
  slotForm: FormGroup;
  title: string = "Create";
  RoomID: string;
  StartTime: Date;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _slotService: SlotService,
    private _router: Router)
  {
    if(this._avRoute.snapshot.params["id"])
    {
      this.RoomID = this._avRoute.snapshot.params["id"];
    }
    this.slotForm = this._fb.group({
      roomId: ["", [Validators.required]],
    });
  }

  ngOnInit()
  {
    this.title = "Edit";
    this._slotService.getSingleSlot(this.RoomID, this.StartTime).subscribe(resp => this.slotForm.setValue(resp),
      error => this.errorMessage = error);
  }

  save()
  {
    if(!this.slotForm.valid)
    {
      return;
    }
    if(this.title === "Create")
    {
      this._slotService.saveSlot(this.slotForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-employee"]);
      }, error => this.errorMessage = error);
    }
    else if(this.title === "Edit")
    {
      this._slotService.updateSlot(this.slotForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-employee"]);
      }, error => this.errorMessage = error);
    }
  }

  cancel()
  {
    this._router.navigate(["/fetch-slot"]);
  }

  get roomId()
  {
    return this.slotForm.get("RoomID");
  }
}
