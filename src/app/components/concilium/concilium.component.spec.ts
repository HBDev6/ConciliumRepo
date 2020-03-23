import { ConciliumComponent } from './concilium.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ConciliumComponent', () => {
  let component: ConciliumComponent;
  let fixture: ComponentFixture<ConciliumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
