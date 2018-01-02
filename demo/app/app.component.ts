import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';
import { MeepoCache } from 'meepo-base';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends MeepoCache {
  constructor(
    public store: StoreService,
    public cd: ChangeDetectorRef,
    public title: Title
  ) { 
    super(store,cd,title);
  }
}
