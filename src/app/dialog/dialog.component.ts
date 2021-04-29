import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../../data/movie-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  constructor(private fb: FormBuilder, private movieService: MovieService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  movies: Movie[] = []

  ngOnInit(): void {
    if (this.data.movie) {
      this.movieForm.setValue({
        title: this.data.movie.title,
        episodes: this.data.movie.episodes,
        information: this.data.movie.info_url,
        watch: this.data.movie.watch_url,
      })
    }
  }

  movieForm = this.fb.group({
    title: ['', Validators.required],
    episodes: [0],
    information: [''],
    watch: ['']
  })

  title = this.data.title

  /**
   * Execute Operation on Form Data
   * 
   * If in Edit Mode Edits Movie
   * 
   * If in Add Mode Adds Movie
   */
  executeAction() {
    if (this.data.movie) {
      this.movieService.editMovie(this.data.movie.id, {
        title: this.movieForm.value.title,
        episodes: this.movieForm.value.episodes,
        info_url: this.movieForm.value.information,
        watch_url: this.movieForm.value.watch
      })
    } else {
      this.movieService.addMovie({
        id: `${this.movieService.getMovieslength() + 1}`,
        title: this.movieForm.value.title,
        episodes: this.movieForm.value.episodes,
        info_url: this.movieForm.value.information,
        watch_url: this.movieForm.value.watch
      });
    }
  }


}
