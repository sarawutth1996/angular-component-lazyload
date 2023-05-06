import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, map, take, filter } from 'rxjs';

interface Book {
  name: string;
  authors: string | null;
}

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css'],
})
export class GetRequestComponent implements OnInit {
  item: Book[] = [];
  keyword: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http
    //   .get<Book[]>(`https://www.anapioficeandfire.com/api/books`)
    //   .pipe(
    //     take(5),
    //     map((books: Book[]) => {
    //       return books
    //         .map((book) => {
    //           const data = {
    //             name: book.name,
    //             authors: book.authors ? book.authors[0] : null,
    //           };
    //           return data;
    //         })
    //         .slice(0, 5);
    //     }),
    //     catchError((error) => {
    //       // error
    //       return throwError(() => new Error('Error ', error));
    //     })
    //   )
    //   .subscribe((result) => {
    //     console.log(result);
    //   });
  }

  search(name: string) {
    this.http
      .get<Book[]>(`https://www.anapioficeandfire.com/api/books?name=${name}`)
      .subscribe((response) => {
        console.log(response);
        this.item = response;
      });
    console.log(name);
  }
}
