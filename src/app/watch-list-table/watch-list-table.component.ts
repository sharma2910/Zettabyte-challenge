import { Component, OnInit, NgZone } from '@angular/core';
import { Movie } from '../../data/movie-data';
import { MovieService } from '../movie.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-watch-list-table',
  templateUrl: './watch-list-table.component.html',
  styleUrls: ['./watch-list-table.component.scss']
})
export class WatchListTableComponent implements OnInit {

  movies: Movie[] = []
  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.dataSource = this.movies
  }

  /**
   * Function To Open Dialog
   */
  openDialog(title: string, data: any) {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: title,
        movie: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
      }
    });
  }

  displayedColumns: string[] = ['title', 'episodes', 'info_url', 'watch_url', 'actions'];
  dataSource = this.movies;


  /**
   * Refreshes Table Data
   */
   refreshTable() {
    this.dataSource = this.movieService.deleteMovie('a');
  }

  /**
   * Deletes Movie from Table
   * @param id 
   */
  deleteMovie(id: string) {
    this.dataSource = this.movieService.deleteMovie(id);
  }

}
