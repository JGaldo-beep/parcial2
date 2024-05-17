import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  animes: Array<Anime> = [];

  selectedAnime!: Anime;
  selected = false;

  constructor(private animeService: AnimeService) {}

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }
}
