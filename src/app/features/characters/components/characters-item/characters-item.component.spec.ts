import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersItemComponent } from './characters-item.component';

describe('CharactersItemComponent', () => {
  let component: CharactersItemComponent;
  let fixture: ComponentFixture<CharactersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
