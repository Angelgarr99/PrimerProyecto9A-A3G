import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { PythonComponent } from './componentes/leng/python/python.component';
import { JavaComponent } from './componentes/leng/java/java.component';
import { GoComponent } from './componentes/leng/go/go.component';
import { RComponent } from './componentes/leng/r/r.component';
import { SwiftComponent } from './componentes/leng/swift/swift.component';
import { JavaScriptComponent } from './componentes/leng/java-script/java-script.component';
import { DartComponent } from './componentes/leng/dart/dart.component';
import { PhpComponent } from './componentes/leng/php/php.component';
import { CSharpComponent } from './componentes/leng/c-sharp/c-sharp.component';
import { CmasmasComponent } from './componentes/leng/cmasmas/cmasmas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LenguajesComponent,
    PythonComponent,
    JavaComponent,
    GoComponent,
    RComponent,
    SwiftComponent,
    JavaScriptComponent,
    DartComponent,
    PhpComponent,
    CSharpComponent,
    CmasmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
