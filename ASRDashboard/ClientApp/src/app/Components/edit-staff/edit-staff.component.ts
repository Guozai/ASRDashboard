import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SlotService } from "../../services/slot.service";

@Component({
  selector: "app-edit-staff",
  templateUrl: "./edit-staff.component.html",
  styleUrls: ["./edit-staff.component.css"]
})
export class EditStaffComponent implements OnInit {
  slotForm: FormGroup;
  id: string;
  startTime: Date;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _slotService: SlotService,
    private _router: Router)
  {
    if(this._avRoute.snapshot.params["id"])
    {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.slotForm = this._fb.group({
      roomId: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
    });
  }

  ngOnInit()
  {
    this._slotService.getSingleSlot(this.id, this.startTime).subscribe(resp => this.slotForm.setValue(resp),
      error => this.errorMessage = error);
  }

  save()
  {
    if(!this.slotForm.valid)
    {
      return;
    }
    this._slotService.updateSlot(this.slotForm.value).subscribe((data) => {
      this._router.navigate(["/fetch-room"]);
    }, error => this.errorMessage = error);
  }

  cancel()
  {
    this._router.navigate(["/fetch-room"]);
  }

  get roomId()
  {
    return this.slotForm.get("roomId");
  }
}
