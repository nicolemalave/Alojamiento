import { RouterModule,Routes } from '@angular/router';
import { CRUDComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'crud', component: CRUDComponent },
    { path: '', redirectTo: '/crud', pathMatch: 'full' }, // Ruta por defecto
  // Puedes agregar más rutas aquí según sea necesario
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }