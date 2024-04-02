import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRequestsComponent } from './index-requests.component';

describe('IndexRequestsComponent', () => {
  let component: IndexRequestsComponent;
  let fixture: ComponentFixture<IndexRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
