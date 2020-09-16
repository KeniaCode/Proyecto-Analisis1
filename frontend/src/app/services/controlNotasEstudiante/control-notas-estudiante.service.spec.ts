import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ControlNotasEstudianteService } from './control-notas-estudiante.service';

fdescribe('ControlNotasEstudianteService', () => {
  let service: ControlNotasEstudianteService;
  let data = {
    id_usuario: 1,
    id_clase: 1
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ]
    });
    service = TestBed.inject(ControlNotasEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verificacion de funcionamiento del endpoint que obtiene tareas', () => {
    expect(service.get_tareas(data)).toBeTruthy();
  });

  it('verificacion de funcionamiento del endpoint que obtiene examenes', () => {
    expect(service.get_examenes(data)).toBeTruthy();
  });
});
