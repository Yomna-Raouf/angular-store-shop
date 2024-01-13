import { Component, EventEmitter, Output, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BehaviorSubject, debounceTime } from 'rxjs';

import { CategoryService } from '../services/category.service';

import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnDestroy {
  categories = inject(CategoryService);
  private _searchSubject: BehaviorSubject<string> = new BehaviorSubject('');


  @Output() setValue: EventEmitter<string> = new EventEmitter();

  constructor() {
    this._setSearchSubscription();
    this.categories.getProductCategories();
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
