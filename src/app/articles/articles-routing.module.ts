import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'new', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
