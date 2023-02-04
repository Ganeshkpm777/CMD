import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddOrderInfoComponent } from './add-order-info.component';

describe('AddOrderInfoComponent', () => {
  let component: AddOrderInfoComponent;
  let fixture: ComponentFixture<AddOrderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ AddOrderInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
