import { Component, OnInit, Input } from "@angular/core";
import { BooksService } from "src/app/services/books.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.booksService.getBooks(routeParams.id).subscribe(books => {
        this.books = books;
      });
    });
  }
}
