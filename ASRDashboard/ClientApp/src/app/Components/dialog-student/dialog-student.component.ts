import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SlotService } from "../../services/slot.service";

@Component({
  selector: 'app-dialog-student',
  templateUrl: './dialog-student.component.html',
})
export class DialogStudentComponent {
  dialogForm: FormGroup;
  id: string;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _slotService: SlotService,
    private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.dialogForm = this._fb.group({
      id: ["", [Validators.required]],
    });
  }

  submit() {
    if (!this.dialogForm.valid) {
      return;
    }
    this._router.navigate(["/fetch-student", this.dialogForm.value]);
  }
}
