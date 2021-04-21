import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/store';
import {getApiReqCount} from '../../store/app/reducers/app.reducer';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],

})
export class NavComponent implements OnInit {

  loading = false;
  apiReq$: Observable<number>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {
    this.apiReq$ = store.select(getApiReqCount);
  }

  ngOnInit() {
    this.apiReq$.subscribe(result => setTimeout(() => {
      if (result > 0) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    }, 0));
  }
}
