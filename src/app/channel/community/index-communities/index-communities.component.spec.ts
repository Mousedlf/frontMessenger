import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCommunitiesComponent } from './index-communities.component';

describe('IndexCommunitiesComponent', () => {
  let component: IndexCommunitiesComponent;
  let fixture: ComponentFixture<IndexCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCommunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
