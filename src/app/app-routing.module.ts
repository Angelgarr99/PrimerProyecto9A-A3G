import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
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

const route: Routes=[
  {path: 'inicio', component: InicioComponent},
  {path: 'lenguajes', component: LenguajesComponent},
  {path: 'python', component: PythonComponent},
  {path: 'java', component: JavaComponent},
  {path: 'go', component: GoComponent},
  {path: 'r', component: RComponent},
  {path: 'swift', component: SwiftComponent},
  {path: 'javaScript', component: JavaScriptComponent},
  {path: 'dart', component: DartComponent},
  {path: 'php', component: PhpComponent},
  {path: 'csharp', component: CSharpComponent},
  {path: 'cmasmas', component: CmasmasComponent},
  {path: '**', pathMatch:'full', redirectTo:'inicio' }  
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
