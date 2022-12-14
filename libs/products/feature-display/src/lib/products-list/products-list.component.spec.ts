import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsFacadeService } from '@omnia/products/data-access';

import { SharedUiListModule } from '@omnia/shared/ui-list';
import { Subject } from 'rxjs';

import { ProductsListComponent } from './products-list.component';
import { CommonModule } from '@angular/common';
import { ProductsUiModule } from '@omnia/products/ui';
import { Router } from '@angular/router';

describe('ProductsListComponent', () => {
  const productsSelectorStub$ = new Subject();

  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let facadeService: jest.Mocked<ProductsFacadeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [SharedUiListModule, CommonModule, ProductsUiModule],
      providers: [
        {
          provide: ProductsFacadeService,
          useValue: {
            productsShortInfo$: productsSelectorStub$,
            productSelected: jest.fn(),
          },
        },
        {
          provide: Router,
          useValue: { getCurrentNavigation: jest.fn() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    facadeService = TestBed.inject(
      ProductsFacadeService
    ) as jest.Mocked<ProductsFacadeService>;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onClick', () => {
    it('should delegate select product on click', () => {
      const productId = 'product-id';

      component.onClick(productId);

      expect(facadeService.productSelected).toHaveBeenNthCalledWith(
        1,
        productId
      );
    });
  });
});
