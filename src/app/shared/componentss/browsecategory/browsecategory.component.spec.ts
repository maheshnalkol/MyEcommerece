import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsecategoryComponent } from './browsecategory.component';

describe('BrowsecategoryComponent', () => {
  let component: BrowsecategoryComponent;
  let fixture: ComponentFixture<BrowsecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsecategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
