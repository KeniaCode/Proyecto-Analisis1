import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearUsuarioService } from './crear-usuario.service';

fdescribe('CrearUsuarioService', () => {
  let service: CrearUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ]
    });
    service = TestBed.inject(CrearUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia existir la importacion de la url de la api', () => {
    let base64 = service.getbaseURL()
    expect(base64).toBeTruthy();
  });

  it('deberia existir la funcion post a la api', () => {
    let res = service.postUser
    expect(res).toBeTruthy();
  });

});
