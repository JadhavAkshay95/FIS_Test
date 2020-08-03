import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkBookService } from '../work-book.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-candidate-dialog',
  templateUrl: './add-candidate-dialog.component.html',
  styleUrls: ['./add-candidate-dialog.component.scss'],
})
export class AddCandidateDialogComponent implements OnInit {
  candidateForm: FormGroup;
  skillsList = ['C#', 'MVC .Net', 'Angularjs', 'React js', 'Angular 2/4/5'];

  constructor(
    private formBuilder: FormBuilder,
    private workBookService: WorkBookService,
    public dialogRef: MatDialogRef<AddCandidateDialogComponent>,
    private _snackBar: MatSnackBar
  ) {}
  skillData = [];
  ngOnInit(): void {
    this.candidateForm = this.formBuilder.group({
      name: [null, Validators.required],
      city: [null],
      status: ['interview'],
      gender: ['male', Validators.required],
      skills: [null],
    });
  }

  checkSkills(event, skill) {
    event.checked
      ? this.skillData.push(skill)
      : this.skillData.splice(this.skillData.indexOf(skill), 1);
  }

  submit() {
    if (this.skillData.length && this.candidateForm.valid) {
      this.candidateForm.value.skills = this.skillData;
      this.workBookService
        .addCandidate(this.candidateForm.value)
        .subscribe((data) => {
          this.dialogRef.close(true);
          this._snackBar.open(`Candidate' ${this.candidateForm.value.name} added successfully!`, '', {
            duration: 2000,
          });
        });
    }
  }
}
