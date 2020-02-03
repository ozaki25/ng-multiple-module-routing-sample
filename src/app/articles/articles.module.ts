import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [ArticlesComponent, NewComponent],
  imports: [CommonModule, ArticlesRoutingModule],
})
export class ArticlesModule {}
