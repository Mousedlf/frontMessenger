import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexConversationsComponent } from './index-conversations.component';

describe('IndexConversationsComponent', () => {
  let component: IndexConversationsComponent;
  let fixture: ComponentFixture<IndexConversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexConversationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
