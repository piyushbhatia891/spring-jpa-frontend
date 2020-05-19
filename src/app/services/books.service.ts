import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  private baseUrl = "http://localhost:8080/api/v1";
  constructor(private httpClient: HttpClient) {}

  getBooks(libraryId: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(
      `${this.baseUrl}` + "/library/" + `${libraryId}` + "/books"
    );
  }
}
