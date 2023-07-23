import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = {"Search":[
    {"Title":"Hello, Goodbye and Everything in Between","Year":"2022","imdbID":"tt4181158","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjZiNGZlZWQtYjg1Ny00ZjE2LWE5ZjEtYzRjMmQzOWZhMmFmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"},
    {"Title":"Everything Happens to Me","Year":"1980","imdbID":"tt0080530","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjE0ZjExMzYtZDllOS00ZmQxLThiNGItZjgyMWU5NzA5YzQxXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},
    {"Title":"Everything Will Be Ok","Year":"2006","imdbID":"tt0887734","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWFmNDZjNWEtYTVhYy00NjdmLWFiNzAtODczNzg5ODIyN2MxXkEyXkFqcGdeQXVyNjU2OTg3MDU@._V1_SX300.jpg"},
    {"Title":"Eric Andre: Legalize Everything","Year":"2020","imdbID":"tt12327104","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzhkMWNiMDMtMmI4OC00OTM0LWE1ODctNjQwZDY5M2QzYWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
    {"Title":"Everything or Nothing","Year":"2012","imdbID":"tt2366308","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTg4MzdmNzktOGUxYi00NGJmLTlmYjItMTJjNDU4NjQ5OTQ4XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_SX300.jpg"},
    {"Title":"Everything Went Fine","Year":"2021","imdbID":"tt12847812","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjAyMGE2ZDAtMjVjZS00YWRlLWFjY2QtOGExN2ZmYWVlZGU5XkEyXkFqcGdeQXVyMjUzMTYzMDI@._V1_SX300.jpg"},
    {"Title":"A Birder's Guide to Everything","Year":"2013","imdbID":"tt1582465","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU5NDIzNjY1M15BMl5BanBnXkFtZTgwOTUyNDIzMTE@._V1_SX300.jpg"},
    {"Title":"The Best of Everything","Year":"1959","imdbID":"tt0052619","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTljNzUxZDAtYmFmNC00YjhiLThjOGEtZmM4ZDQ4MjJkYzhiXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg"},
    {"Title":"After Everything","Year":"2018","imdbID":"tt6688022","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2QyMjczZTMtYTQ4Ny00ZDU1LTk5NmMtYTlkZjQyMWE2NzQwXkEyXkFqcGdeQXVyMTI4Mjg4MjA@._V1_SX300.jpg"},
    {"Title":"This Changes Everything","Year":"2018","imdbID":"tt5795282","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjMwYzcwNDQtNDk4My00Zjg5LWIzMGMtZTRkMTAwZWQ2NmI5XkEyXkFqcGdeQXVyMTI4Mjg4MjA@._V1_SX300.jpg"}
  ],"totalResults":"1104","Response":"True"}

  constructor(
    private http: HttpClient
  ) { }

  getMoviesWithKeyword() {
    return this.http.get(`https://www.omdbapi.com/?s=everything&type=movie&page=2&apikey=28673d9f`)
  }

  getDetailsWithId(id: any) {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=28673d9f`)
  }

}
