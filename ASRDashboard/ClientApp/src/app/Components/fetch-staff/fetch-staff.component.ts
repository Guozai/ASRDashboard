import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { SlotService } from "../../services/slot.service";

@Component({
  selector: "app-fetch-staff",
  templateUrl: "./fetch-staff.component.html",
  styleUrls: ["./fetch-staff.component.css"]
})
export class FetchStaffComponent {
  slotList: SlotData[];
  staffId: string;

  constructor(public http: Http, private _avRoute: ActivatedRoute, private _slotService: SlotService)
  {
    if (this._avRoute.snapshot.params["id"]) {
      this.staffId = this._avRoute.snapshot.params["id"];
    }
    this.getSlots(this.staffId);
  }

  getSlots(staffId)
  {
    this._slotService.getSlotsForStaff(staffId).subscribe(data => this.slotList = data);
  }

  delete(RoomID, StartTime, staffId)
  {
    const ans = confirm("Do you want to delete slot for room " + RoomID + " at time: " + StartTime);
    if(ans)
    {
      this._slotService.deleteSlot(RoomID, StartTime).subscribe((data) =>
        {
          this.getSlots(staffId);
        },
        error => console.error(error));
    }
  }
}

interface SlotData {
  RoomID: string;
  StartTime: string;
  staffId: string;
  studentId: string;
}
