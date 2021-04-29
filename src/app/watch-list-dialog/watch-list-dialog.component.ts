import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MovieService } from '../movie.service'
/**
 * Dialog Component with Form to Add / Edit Movies in the Table
 */
@Component({
  selector: 'app-watch-list-dialog',
  templateUrl: './watch-list-dialog.component.html',
  styleUrls: ['./watch-list-dialog.component.scss']
})
export class WatchListDialogComponent implements OnInit {

  @Output() movieAddEvent = new EventEmitter();
  constructor(public dialog: MatDialog, private movieService: MovieService) { }

  /**
   * Function To Open Dialog
   */
  openDialog(title: string, data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.movieAddEvent.emit('')
      }
    });
  }

  ngOnInit(): void {
  }

}
