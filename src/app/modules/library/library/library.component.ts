import { Component, OnInit } from "@angular/core";
import { LibraryService } from "src/app/services/library.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-library",
  templateUrl: "./library.component.html",
  styleUrls: ["./library.component.css"]
})
export class LibraryComponent implements OnInit {
  libraries: Library[];
  constructor(private libraryService: LibraryService, private router: Router) {}

  ngOnInit(): void {
    this.libraryService.getLibraries().subscribe(library => {
      console.log("libraries", library);
      this.libraries = library;
    });
  }
  gotoBooksPage(libraryId: number) {
    this.router.navigate(["/books", libraryId]);
  }
}
