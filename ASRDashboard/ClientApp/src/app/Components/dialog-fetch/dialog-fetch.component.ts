import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SlotService } from "../../services/slot.service";

@Component({
  selector: 'app-dialog-fetch',
  templateUrl: './dialog-fetch.component.html',
})
export class DialogFetchComponent {
  dialogForm: FormGroup;
  id: string;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _slotService: SlotService,
    private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.dialogForm = this._fb.group({
      roomId: ["", [Validators.required]],
    });
  }

  submit() {
    if (!this.dialogForm.valid) {
      return;
    }
    if (this.id.startsWith("e")) {
      this._slotService.getSlotsForStaff(this.dialogForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-slot"]);
      }, error => this.errorMessage = error);
    }
    if (this.id.startsWith("s")) {
      this._slotService.getSlotsForStudent(this.dialogForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-slot"]);
      }, error => this.errorMessage = error);
    }
    else {
      return;
    }
  }

  cancel() {
    this._router.navigate(["/fetch-slot"]);
  }
}
