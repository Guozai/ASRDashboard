import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class RoomService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string)
  {
    this.myAppUrl = baseUrl;
  }

  getCityList()
  {
    return this._http.get(this.myAppUrl + "api/Employee/GetCityList").map(res => res.json()).catch(this.errorHandler);
  }

  getRooms()
  {
    return this._http.get(this.myAppUrl + "api/Room/Index").map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getRoomById(RoomID: string)
  {
    return this._http.get(this.myAppUrl + "api/Room/Details/" + RoomID).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  saveRoom(room)
  {
    return this._http.post(this.myAppUrl + "api/Room/Create", room).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateRoom(room)
  {
    return this._http.put(this.myAppUrl + "api/Room/Edit", room).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteRoom(RoomID: string)
  {
    return this._http.delete(this.myAppUrl + "api/Room/Delete/" + RoomID).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response)
  {
    console.log(error);
    return Observable.throw(error);
  }
}
