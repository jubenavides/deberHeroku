import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
