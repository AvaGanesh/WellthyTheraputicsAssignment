import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellthyPreviewComponent } from './wellthy-preview.component';

describe('WellthyPreviewComponent', () => {
  let component: WellthyPreviewComponent;
  let fixture: ComponentFixture<WellthyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellthyPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellthyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
