import { TestBed } from '@angular/core/testing';

import { CrearUsuarioService } from './crear-usuario.service';

fdescribe('CrearUsuarioService', () => {
  let service: CrearUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia existir la importacion de la url de la api', () => {
    expect(service.baseURL).toBeTruthy();
  });
});
