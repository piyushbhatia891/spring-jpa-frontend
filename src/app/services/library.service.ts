import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LibraryService {
  private baseUrl = "http://localhost:8080/api/v1";
  constructor(private http: HttpClient) {}

  getLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(`${this.baseUrl}` + "/libraries");
  }
}
