import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimpageComponent } from './elimpage.component';

describe('ElimpageComponent', () => {
  let component: ElimpageComponent;
  let fixture: ComponentFixture<ElimpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElimpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElimpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
