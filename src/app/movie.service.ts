import { Injectable } from '@angular/core';
import { Movie } from '../data/movie-data'
import { Observable, of, Subject } from 'rxjs'


let movies: Movie[] = [{
  id: '1',
  title: 'Shingeki no Kyojin: The Final Season',
  episodes: 16,
  info_url: 'https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season',
  watch_url: 'https://www12.9anime.to/watch/attack-on-titan-final-season.k524/ep-1'
},
{
  id: '2',
  title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
  episodes: 1,
  info_url: 'https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen',
  watch_url: 'https://demonslayer-anime.com/risshihen/streaming/'
},
{
  id: '3',
  title: 'Start-Up',
  episodes: 16,
  info_url: 'https://asianwiki.com/Start-Up_(Korean_Drama)',
  watch_url: 'https://kissasians.org/detail/start-up-2020/'
}];

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  movieSubject = new Subject();


  /**
   * Get Movies Array
   * @returns Movies Array
   */
  getMovies(): Movie[] {
    return movies;
  }

  /**
   * Get length of movies array
   * @returns Movie array length
   */
  getMovieslength(): number {
    return movies.length;
  }

  /**
   * Add new Movie to Array
   * @param movie 
   * @returns Movie array length
   */
  addMovie(movie: Movie) {
    return movies.push(movie);
  }

  /**
   * Edits Movie 
   * @param id Id of Movie to be Edited
   * @param data Movie Data
   */
  editMovie(id: string, data: any) {
    let index = movies.findIndex((obj => obj.id == id));
    movies[index].title = data.title;
    movies[index].episodes = data.episodes;
    movies[index].info_url = data.info_url;
    movies[index].watch_url = data.watch_url;

  }

  /**
   * Deletes Movie From Array
   * @param id id of Movie to be deleted
   * @returns Movie Array
   */
  deleteMovie(id: String): Movie[] {
    movies = movies.filter((value, index, arr) => {
      return value.id != id;
    })
    return movies;
  }
  
}
