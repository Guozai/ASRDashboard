import { Injectable, Inject, startTimeRange } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class SlotService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string)
  {
    this.myAppUrl = baseUrl;
  }

  getCityList()
  {
    return this._http.get(this.myAppUrl + "api/Employee/GetCityList").map(res => res.json()).catch(this.errorHandler);
  }

  getSlots()
  {
    return this._http.get(this.myAppUrl + "api/Slot/Index").map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getSingleSlot(RoomID: string, StartTime: Date)
  {
    var dateTime = StartTime.getDate() + "/" + (StartTime.getMonth() + 1) + "/" + StartTime.getFullYear()
      + " " + StartTime.getHours() + ":" + StartTime.getMinutes() + ":" + StartTime.getSeconds();

    return this._http.get(this.myAppUrl + "api/Slot/Details/" + RoomID + "/" + dateTime).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  saveSlot(slot)
  {
    return this._http.post(this.myAppUrl + "api/Slot/Create", slot).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateSlot(slot)
  {
    return this._http.put(this.myAppUrl + "api/Slot/Edit", slot).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteEmployee(RoomID: string, StartTime: Date)
  {
    var dateTime = StartTime.getDate() + "/" + (StartTime.getMonth() + 1) + "/" + StartTime.getFullYear()
      + " " + StartTime.getHours() + ":" + StartTime.getMinutes() + ":" + StartTime.getSeconds();

    return this._http.delete(this.myAppUrl + "api/Slot/Delete/" + RoomID + "/" + dateTime).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response)
  {
    console.log(error);
    return Observable.throw(error);
  }
}
