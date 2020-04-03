import { Component, OnInit } from '@angular/core';
import { Movie } from '../models'
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from'rxjs/operators';
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
  }

}
