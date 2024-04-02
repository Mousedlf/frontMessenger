import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGroupConversationsComponent } from './index-group-conversations.component';

describe('IndexGroupConversationsComponent', () => {
  let component: IndexGroupConversationsComponent;
  let fixture: ComponentFixture<IndexGroupConversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexGroupConversationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexGroupConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
