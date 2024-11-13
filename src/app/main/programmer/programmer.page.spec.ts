import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgrammerPage } from './programmer.page';

describe('ProgrammerPage', () => {
  let component: ProgrammerPage;
  let fixture: ComponentFixture<ProgrammerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
