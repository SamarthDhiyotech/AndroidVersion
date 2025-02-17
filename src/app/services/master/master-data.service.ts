import { Injectable } from '@angular/core';
import { UtilService } from '../util/util.service';
import { MstStateModel } from 'src/app/models/MstStateModel';
import { BehaviorSubject } from 'rxjs';
import { CompCategoryModel } from 'src/app/models/CompCategoryModel';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  private state: BehaviorSubject<MstStateModel[]> = new BehaviorSubject<MstStateModel[]>([]);
  private category: BehaviorSubject<CompCategoryModel[]> = new BehaviorSubject<CompCategoryModel[]>([]);
  private isStateLoaded: boolean = false;
  private isCategoryLoaded: boolean = false;

  constructor(private util: UtilService) {}

  getCategory() {
    if (!this.isCategoryLoaded) {
      this.loadMasterCategories();
    }
    return this.category;
  }

  getState() {
    if (!this.isStateLoaded) {
      this.loadMasterStates();
    }
    return this.state;
  }

  private loadMasterCategories() {
    this.util.get<CompCategoryModel[]>('master/categories').subscribe(
      res => {
        this.category.next(res);
        this.isCategoryLoaded = true;
      },
      err => {
        console.error('Failed to load categories:', err);
      }
    );
  }

  private loadMasterStates() {
    this.util.get<MstStateModel[]>('master/state').subscribe(
      res => {
        this.state.next(res);
        this.isStateLoaded = true;
      },
      err => {
        console.error('Failed to load states:', err);
      }
    );
  }

  reloadMasterData() {
    this.isStateLoaded = false;
    this.isCategoryLoaded = false;
    this.loadMasterStates();
    this.loadMasterCategories();
  }

  getStateDescByKey(key: string) {
    if (key == null) {
      return '';
    }
    const state = this.state.getValue().find(d => d.key + '' === key + '');
    return state ? state.desc : '';
  }

  getCategoryDescByKey(key: string) {
    if (key == null) {
      return '';
    }
    const category = this.category.getValue().find(d => d.key + '' === key + '');
    return category ? category.desc : '';
  }
}
