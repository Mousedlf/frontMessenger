import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationNavComponent } from './conversation-nav.component';

describe('ConversationNavComponent', () => {
  let component: ConversationNavComponent;
  let fixture: ComponentFixture<ConversationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
