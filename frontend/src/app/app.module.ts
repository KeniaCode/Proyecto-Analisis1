import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { ToastrModule } from 'ngx-toastr';
import { UpdateTareaComponent } from './components/update-tarea/update-tarea.component';
import { VerTareasComponent } from './components/ver-tareas/ver-tareas.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { EntregarTareaComponent } from './components/entregar-tarea/entregar-tarea.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { LoginComponent } from './components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { VerExamenesComponent } from './components/ver-examenes/ver-examenes.component';
import { UpdateExamenComponent } from './components/update-examen/update-examen.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { DialogoEliminarExamenComponent } from './components/dialogo-eliminar-examen/dialogo-eliminar-examen.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent,
    VerTareasComponent,
    EntregarTareaComponent,
    UpdateTareaComponent,
    DialogoComponent,
    LoginComponent,
    VerExamenesComponent,
    UpdateExamenComponent,
    CrearExamenComponent,
    CrearPreguntaComponent,
    DialogoEliminarExamenComponent,
    CrearClaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatFileInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatExpansionModule,
    NgxDropzoneModule,
    FormsModule,
    MatDialogModule, // <--- Aquí
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatListModule,
    MatRadioModule,
  ],
  providers: [MatDatepickerModule, {provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: []}],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogoComponent, // <--- Aquí
  ]
})
export class AppModule {}
