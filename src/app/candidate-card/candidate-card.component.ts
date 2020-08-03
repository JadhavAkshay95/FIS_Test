import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { WorkBookService } from '../work-book.service';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
})
export class CandidateCardComponent implements OnInit {
  @Input() candidate;
  @Output() fetchData = new EventEmitter();
  constructor(private workBookService: WorkBookService) {}

  ngOnInit(): void {
  }

  selectRejectCandidate(status) {
    this.candidate.status = status;
    this.workBookService.updateCandidateStatus(this.candidate);
    this.fetchData.emit('fetch');
  }
}
