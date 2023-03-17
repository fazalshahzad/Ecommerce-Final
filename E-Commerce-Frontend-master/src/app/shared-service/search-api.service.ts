import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  private searchQuery = new BehaviorSubject<string>('');
  currentSearchQuery = this.searchQuery.asObservable();

  constructor( ) { }

  changeSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
