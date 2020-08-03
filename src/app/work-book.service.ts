import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkBookService {
  candidateList = [
    {
      name: 'akshay jadhav',
      city: 'pune',
      gender: 'male',
      skills: ['C#', 'MVC .Net', 'Angularjs', 'React js'],
      status: 'interview',
      id: 1,
    },
    {
      id: 2,
      name: 'vikas jadhav',
      city: 'pune',
      gender: 'male',
      skills:['C#', 'MVC .Net', 'Angularjs', 'React js', 'Angular 2/4/5'],
      status: 'interview',
    },
    {
      id: 3,
      name: 'amruta jadhav',
      city: 'pune',
      gender: 'male',
      skills: ['MVC .Net', 'Angularjs', 'React js'],
      status: 'interview',
    },
    {
      id: 4,
      name: 'amruta jadhav',
      city: 'pune',
      gender: 'male',
      skills: ['MVC .Net', 'Angularjs', 'React js'],
      status: 'interview',
    },
  ];
  constructor() {}

  getCandidateList(): Observable<any> {
    return of(this.candidateList);
  }

  addCandidate(payload) {
    this.candidateList['id'] = this.candidateList.length;
    return of(this.candidateList.push(payload));
  }

  updateCandidateStatus(candidateData) {
    const index = this.candidateList.findIndex(
      (candidate) => candidate.id === candidateData
    );
    this.candidateList[index] = candidateData;
    this.getCandidateList();
  }
}
