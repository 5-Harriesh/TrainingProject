import { TestBed } from '@angular/core/testing';

import { ExpressionService } from './expression.service';

describe('Expression.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpressionService = TestBed.get(ExpressionService);
    expect(service).toBeTruthy();
  });
});
