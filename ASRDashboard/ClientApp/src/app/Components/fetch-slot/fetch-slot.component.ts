import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { SlotService } from "../../services/slot.service";

@Component({
  selector: "app-fetch-slot",
  templateUrl: "./fetch-slot.component.html",
  styleUrls: ["./fetch-slot.component.css"]
})
export class FetchSlotComponent {
  slotList: SlotData[];

  constructor(public http: Http, private _router: Router, private _slotService: SlotService)
  {
    this.getSlots();
  }

  getSlots()
  {
    this._slotService.getSlots().subscribe(data => this.slotList = data);
  }

  delete(RoomID, StartTime)
  {
    const ans = confirm("Do you want to delete slot for room " + RoomID + " at time: " + StartTime);
    if(ans)
    {
      this._slotService.deleteSlot(RoomID, StartTime).subscribe((data) =>
        {
          this.getSlots();
        },
        error => console.error(error));
    }
  }
}

interface SlotData {
  RoomID: string;
  StartTime: string;
  StaffID: string;
  StudentID: string;
}
