import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidateDialogComponent } from '../add-candidate-dialog/add-candidate-dialog.component';
import { WorkBookService } from '../work-book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  candidateList: any;
  searchword: string;
  selectedCount = 0;
  rejectedCount = 0;
  constructor(
    public dialog: MatDialog,
    private workBookService: WorkBookService
  ) {}

  ngOnInit(): void {
    this.workBookService.getCandidateList().subscribe((data) => {
      this.candidateList = data;
      this.filterData();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCandidateDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  filterData() {
    this.selectedCount = this.candidateList.filter(
      (candidate) => candidate.status === 'selected'
    ).length;

    this.rejectedCount = this.candidateList.filter(
      (candidate) => candidate.status === 'rejected'
    ).length;
  }
}
