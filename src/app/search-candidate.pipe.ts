import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCandidate',
})
export class SearchCandidatePipe implements PipeTransform {
  transform(candidateArray: any[], searchString: string): any {
    if (searchString === undefined || searchString === '') {
      return candidateArray;
    }
    return candidateArray.filter((candidate) => {
      if (
        candidate['name'].toLowerCase().includes(searchString.toLowerCase()) ||
        candidate['city'].toLowerCase().includes(searchString.toLowerCase()) ||
        candidate['gender'].toLowerCase().includes(searchString.toLowerCase())
      ) {
        return candidate;
      }
    });
  }
}
