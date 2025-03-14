import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSubheaderComponent } from './filter-subheader.component';

describe('FilterSubheaderComponent', () => {
  let component: FilterSubheaderComponent;
  let fixture: ComponentFixture<FilterSubheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSubheaderComponent]
    });
    fixture = TestBed.createComponent(FilterSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
