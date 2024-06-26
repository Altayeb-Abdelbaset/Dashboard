import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidetwoComponent } from './slidetwo.component';

describe('SlidetwoComponent', () => {
  let component: SlidetwoComponent;
  let fixture: ComponentFixture<SlidetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlidetwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
