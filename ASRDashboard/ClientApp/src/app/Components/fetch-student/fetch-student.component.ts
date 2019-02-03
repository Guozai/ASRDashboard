import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { SlotService } from "../../services/slot.service";

@Component({
  selector: "app-fetch-student",
  templateUrl: "./fetch-student.component.html",
  styleUrls: ["./fetch-student.component.css"]
})
export class FetchStudentComponent {
  slotList: SlotData[];
  studentId: string;

  constructor(public http: Http, private _avRoute: ActivatedRoute, private _slotService: SlotService)
  {
    if (this._avRoute.snapshot.params["id"]) {
      this.studentId = this._avRoute.snapshot.params["id"];
    }
    this.getSlots(this.studentId);
  }

  getSlots(studentId) {
    this._slotService.getSlotsForStudent(studentId).subscribe(data => this.slotList = data);
  }

  delete(RoomID, StartTime, studentId)
  {
    const ans = confirm("Do you want to delete slot for room " + RoomID + " at time: " + StartTime);
    if(ans)
    {
      this._slotService.deleteSlot(RoomID, StartTime).subscribe((data) =>
        {
          this.getSlots(studentId);
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
