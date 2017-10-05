import { TestBed, inject } from '@angular/core/testing';

import { BuscarLibrosService } from './buscar-libros.service';

describe('BuscarLibrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarLibrosService]
    });
  });

  it('should be created', inject([BuscarLibrosService], (service: BuscarLibrosService) => {
    expect(service).toBeTruthy();
  }));
});
