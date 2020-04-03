import { Component, OnInit } from '@angular/core';
import { Movie } from '../models'
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from'rxjs/operators';
import { Router} from "@angular/router"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})



export class MoviesComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }
  movies: Movie[]
  headers = new HttpHeaders();
  newMovie: Movie = new Movie()

  ngOnInit() {
    this.getAllMovies()
    this.newMovie.casts=["proba"]
    this.newMovie.genres=["proba"]
    this.newMovie.name = ""

    
    this.headers.set("Access-Control-Allow-Origin","*")
  }

  getAllMovies(){
    this.http.get<Movie[]>(environment.apiUrl+"/movies", {headers:this.headers}).subscribe(res=>{
      this.movies = res
      console.log(this.movies)
    })
  }


  delete(movie: Movie){
    console.log(JSON.parse(JSON.stringify(movie._id)))
    this.http.delete(environment.apiUrl+"/movies/"+JSON.parse(JSON.stringify(movie._id)).$oid, {headers:this.headers}).subscribe(res=>{
      this.getAllMovies()
    })
    
  }
  
  
  addMovie(){
    this.headers.set("Content-Type","application/json");
    this.http.post(environment.apiUrl+"/movies",this.newMovie,{headers:this.headers}).subscribe(res=>{
      this.getAllMovies()
      this.headers.delete("Content-Type");
    })
  }

}
