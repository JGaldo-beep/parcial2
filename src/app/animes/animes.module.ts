import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { BannerComponent } from './banner/banner.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  imports: [CommonModule],
  exports: [AnimeListComponent, BannerComponent, AnimeDetailComponent],
  declarations: [AnimeListComponent, BannerComponent, AnimeDetailComponent],
})
export class AnimesModule {}
