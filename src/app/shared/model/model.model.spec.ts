import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelModel } from './model.model';

describe('ModelModel', () => {
  let component: ModelModel;
  let fixture: ComponentFixture<ModelModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
