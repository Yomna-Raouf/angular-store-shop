import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BehaviorSubject, Observable, debounceTime } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../store/store';
import { categoriesSelector } from '../store/selectors';
import { loadCategories } from '../store/actions';

import { NavbarItemComponent } from '../navbar-item/navbar-item.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnDestroy {
  private _searchSubject: BehaviorSubject<string> = new BehaviorSubject('');

  productsCategories$!: Observable<string[]>;

  @Output() setValue: EventEmitter<string> = new EventEmitter();

  constructor(private store: Store<AppState>) {
    this.productsCategories$ = this.store.select(categoriesSelector);
    this.store.dispatch(loadCategories());
    this._setSearchSubscription();
  }

  private _setSearchSubscription() {
    this._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.setValue.emit(searchValue);
    })
  }

  updateSearch(event: KeyboardEvent) {
    const sanitizedInputText = (event.target as HTMLInputElement ).value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    this._searchSubject.next(sanitizedInputText);
  }

  ngOnDestroy(): void {
    this._searchSubject.unsubscribe();
  }
}
