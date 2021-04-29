import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListDialogComponent } from './watch-list-dialog.component';

describe('WatchListDialogComponent', () => {
  let component: WatchListDialogComponent;
  let fixture: ComponentFixture<WatchListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
