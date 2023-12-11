import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnuncioListComponent } from './anuncio-list/anuncio-list.component';
import { AnuncioDetailsComponent } from './anuncio-details/anuncio-details.component';
import { AnuncioCreateEditComponent } from './anuncio-create-edit/anuncio-create-edit.component';

const routes: Routes = [
  { path: '', component: AnuncioListComponent },
  { path: 'anuncios/:id', component: AnuncioDetailsComponent },
  { path: 'create', component: AnuncioCreateEditComponent },
  { path: 'edit/:id', component: AnuncioCreateEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
