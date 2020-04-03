import { Component, OnInit } from '@angular/core';
import { Movie } from '../models';
import {FormArray, FormControl} from '@angular/forms'

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
